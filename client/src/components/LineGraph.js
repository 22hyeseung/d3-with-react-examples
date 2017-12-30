import React, { Component } from 'react';
import { scaleLinear, scaleTime } from 'd3-scale';
import { isoParse } from 'd3-time-format';
import { select, selectAll, mouse as d3Mouse } from 'd3-selection';
import { extent, bisector } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { line } from 'd3-shape';
import PropTypes from 'prop-types';
import Map from 'lodash/map';
import 'scss/components/graph.scss';

class LineGraph extends Component {
  // onMouseOut = () => {
  //   const svg = select('svg');
  //   svg.select('.mouse-line').style('opacity', '0');
  //   select('.mouse-per-line circle').style('opacity', '0');
  // };
  // onMouseOver = () => {
  //   const svg = select('svg');
  //   svg.select('.mouse-line').style('opacity', '1');
  //   select('.mouse-per-line circle').style('opacity', '1');
  // };
  // onMouseMove = (chartData, x) => {
  //   const lines = document.querySelectorAll('.line > path');

  //   const { height, dataKey } = this.props;
  //   const rect = select('rect');
  //   rect.on('mousemove', () => {
  //     const mouse = d3Mouse(this);
  //     select('.mouse-line').attr('d', `M${mouse[0]},${height} ${mouse[0]},0`);
  //     selectAll('.mouse-per-line')
  //       .data(chartData)
  //       .attr('transform', (d, i) => {
  //         const xDate = x.invert(mouse[0]);
  //         const bisect = bisector((data) => {
  //           return data.timestamp;
  //         }).right;
  //         const idx = bisect(d[dataKey], xDate);

  //         let beginning = 0;
  //         let end = lines[i].getTotalLength();
  //         const target = null;

  //         function positionCalc(t, lns) {
  //           const pos = lns[i].getPointAtLength(t);
  //           const posTartget = Math.floor((beginning + end) / 2);
  //           // if (
  //           //   (posTartget === end || posTartget === beginning) &&
  //           //   pos.x !== mouse[0]
  //           // )
  //           if (pos.x > mouse[0]) end = posTartget;
  //           else if (pos.x < mouse[0]) beginning = posTartget;
  //         }

  //         while (true) {
  //           const pos = positionCalc(target, lines);
  //           console.log(pos);
  //           console.log(`translate(${mouse[0]},${pos.y})`);
  //           return `translate(${mouse[0]},${pos.y})`;
  //         }
  //       });
  //   });
  // };

  render() {
    const chartData = [];
    Map(this.props.data, (el, i) => {
      chartData[i] = {
        timestamp: isoParse(el.timestamp),
      };
      chartData[i][this.props.dataKey] = el[this.props.dataKey];
    });

    // x축 (timestamp) 구간 범위 정의 = width만큼
    const xScale = scaleTime()
      .domain(extent(chartData, this.props.selectX)) // 실제 데이터 범위
      .range([0, this.props.width]); // 화면에 보여줄 구간의 범위
    // y축 (sensor 데이터 혹은 score) 구간 범위 정의 = height만큼
    const yScale = scaleLinear()
      .domain(extent(chartData, this.props.selectY))
      .range([this.props.height, 0]);

    const xAxis = axisBottom()
      .scale(xScale)
      .ticks(7);

    const yAxis = axisLeft()
      .scale(yScale)
      .ticks(5);

    const selectScaledX = data => xScale(this.props.selectX(data));
    const selectScaledY = data => yScale(this.props.selectY(data));

    const drawLine = line()
      .x(selectScaledX)
      .y(selectScaledY);

    const linePath = drawLine(chartData);

    return this.props.main ? (
      // 메인그래프
      <svg
        className="Graph-main-container"
        width={
          this.props.width + this.props.margin.left + this.props.margin.right
        }
        height={
          this.props.height + this.props.margin.top + this.props.margin.bottom
        }
      >
        <text x="0" y="-35" fontSize="18px">
          {this.props.dataKey}
        </text>

        {/* x축 */}
        <g
          className="xAxis"
          ref={node => select(node).call(xAxis)}
          style={{
            transform: `translateY(${this.props.height}px)`,
          }}
        />
        {/* y축 */}
        <g className="yAxis" ref={node => select(node).call(yAxis)} />

        {/* 그래프 라인 */}
        <g className="line">
          <path d={linePath} />
        </g>
        {/* 마우스 이벤트 
        <g className="mouse-over-effects">
          <path className="mouse-line" />
          <g className="mouse-per-line">
            <circle r={3} fill="#f9a825" />
          </g>
        </g>
        <rect
          width={this.props.width}
          height={this.props.height}
          fill="none"
          pointerEvents="all"
          onMouseOut={this.onMouseOut}
          onMouseOver={this.onMouseOver}
          onMouseMove={() => this.onMouseMove(chartData, xScale)}
        /> */}
      </svg>
    ) : (
      // 서브그래프
      <div>
        <svg
          className="Graph-sub-container"
          onClick={() => this.props.changeMainGraph(this.props.dataKey)}
          width={
            this.props.width + this.props.margin.left + this.props.margin.right
          }
          height={
            this.props.height + this.props.margin.top + this.props.margin.bottom
          }
        >
          {/* x축 */}
          <g
            className="xAxis"
            ref={node => select(node).call(xAxis)}
            style={{
              transform: `translateY(${this.props.height}px)`,
            }}
          />
          {/* y축 */}
          <g className="yAxis" ref={node => select(node).call(yAxis)} />
          {/* 그래프 라인 */}
          <g className="line">
            <path d={linePath} />
          </g>
          {/* 마우스 이벤트 
        <g className="mouse-over-effects">
          <path className="mouse-line" />
          <g className="mouse-per-line">
            <circle r={2} fill="#f9a825" />
          </g>
        </g>
        <rect
          width={this.props.width}
          height={this.props.height}
          fill="none"
          pointerEvents="all"
          onMouseLeave={this.onMouseOut}
          onMouseEnter={this.onMouseOver}
          onMouseMove={() => this.onMouseMove(chartData, xScale)}
        /> */}
        </svg>
        <span className="Graph-sub-labels">
          <br />
          {this.props.dataKey}
        </span>
      </div>
    );
  }
}

LineGraph.defaultProps = {
  main: true,
  data: [
    {
      timestamp: 0,
      score: 0,
      co2: 0,
      dust: 0,
      temp: 0,
      humid: 0,
      voc: 0,
    },
  ],
  height: 200,
  width: 400,
  selectX: data => data.timestamp,
  selectY: null,
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

LineGraph.propTypes = {
  main: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.number,
      score: PropTypes.number,
      co2: PropTypes.number,
      dust: PropTypes.number,
      temp: PropTypes.number,
      humid: PropTypes.number,
      voc: PropTypes.number,
    }),
  ),
  height: PropTypes.number,
  width: PropTypes.number,
  selectX: PropTypes.func,
  selectY: PropTypes.func,
  dataKey: PropTypes.string.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  changeMainGraph: PropTypes.func.isRequired,
};
export default LineGraph;
