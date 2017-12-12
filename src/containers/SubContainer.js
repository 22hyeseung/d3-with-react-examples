import React, { Component } from 'react'
import SubLineGraph from 'components/SubLineGraph'

class SubContainer extends Component {
  render() {
    return (
      <div>
        <SubLineGraph
          data={this.props.data}
          selectX={data => data.timestamp}
          selectY={data => data[this.props.dataKey]}
          dataKey={this.props.dataKey}
          width={125}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 20,
            left: 20,
          }}
        />
        <SubLineGraph
          data={this.props.data}
          selectX={data => data.timestamp}
          selectY={data => data[this.props.dataKey]}
          dataKey={this.props.dataKey}
          width={145}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 20,
            left: 20,
          }}
        />
        <SubLineGraph
          data={this.props.data}
          selectX={data => data.timestamp}
          selectY={data => data[this.props.dataKey]}
          dataKey={this.props.dataKey}
          width={145}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 20,
            left: 20,
          }}
        />
        <SubLineGraph
          data={this.props.data}
          selectX={data => data.timestamp}
          selectY={data => data[this.props.dataKey]}
          dataKey={this.props.dataKey}
          width={145}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 20,
            left: 20,
          }}
        />
        <SubLineGraph
          data={this.props.data}
          selectX={data => data.timestamp}
          selectY={data => data[this.props.dataKey]}
          dataKey={this.props.dataKey}
          width={145}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 20,
            left: 20,
          }}
        />
      </div>
    )
  }
}

export default SubContainer
