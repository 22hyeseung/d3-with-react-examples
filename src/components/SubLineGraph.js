import React from 'react'
import { scaleLinear, scaleTime } from 'd3-scale'
import { isoParse } from 'd3-time-format'
import { select } from 'd3-selection'
import { extent } from 'd3-array'
import { axisBottom, axisLeft } from 'd3-axis'
import { line } from 'd3-shape'
import PropTypes from 'prop-types'
import 'scss/components/subLineGraph.scss'
import Map from 'lodash/map'

const LineGraph = props => {
  // const node = this.node
  const dataKey = props.dataKey
  let chartData = []
  Map(props.data, (el, i) => {
    chartData[i] = {
      timestamp: isoParse(el.timestamp),
    }
    chartData[i][dataKey] = el[dataKey]
  })

  // x축 (timestamp) 구간 범위 정의 = width만큼
  const xScale = scaleTime()
    .domain(extent(chartData, props.selectX)) // 실제 데이터 범위
    .range([0, props.width]) // 화면에 보여줄 구간의 범위
  // y축 (sensor 데이터 혹은 score) 구간 범위 정의 = height만큼
  const yScale = scaleLinear()
    .domain(extent(chartData, props.selectY))
    .range([props.height, 0])

  const xAxis = axisBottom()
    .scale(xScale)
    .ticks(6)
    .tickSize(4)

  const yAxis = axisLeft()
    .scale(yScale)
    .ticks(5)
    .tickSize(4)

  const selectScaledX = data => xScale(props.selectX(data))
  const selectScaledY = data => yScale(props.selectY(data))

  const subLinearLine = line()
    .x(selectScaledX)
    .y(selectScaledY)

  const linePath = subLinearLine(chartData)

  return (
    <svg
      className="subGraph-container"
      width={props.width + props.margin.left + props.margin.right}
      height={props.height + props.margin.top + props.margin.bottom}
    >
      {/* x축 */}
      <g
        className="xAxis"
        ref={node => select(node).call(xAxis)}
        style={{
          transform: `translateY(${props.height}px)`,
        }}
      />
      {/* y축 */}
      <g className="yAxis" ref={node => select(node).call(yAxis)} />
      {/* 그래프 라인 */}
      <g className="line">
        <path d={linePath} />
      </g>
    </svg>
  )
}

LineGraph.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}
export default LineGraph
