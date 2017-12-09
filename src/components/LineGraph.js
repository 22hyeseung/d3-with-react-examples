import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { isoParse } from 'd3-time-format'
import { select } from 'd3-selection'

class LineGraph extends Component {
  componentDidMount() {
    this.createLineChart()
  }
  componentDidUpdate() {
    this.createLineChart()
  }
  createLineChart = () => {
    const node = this.node
    console.log(this.props.data)
  }
  render() {
    return (
      <svg
        ref={node => (this.node = node)}
        width={
          this.props.width - this.props.margin.right - this.props.margin.left
        }
        height={
          this.props.height - this.props.margin.top - this.props.margin.bottom
        }
      />
    )
  }
}

export default LineGraph
