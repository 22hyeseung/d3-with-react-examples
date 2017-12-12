import React, { Component } from 'react'
import LineGraph from 'components/LineGraph'
import 'scss/main.scss'

class MainContainer extends Component {
  render() {
    return (
      <div className="App-main-container">
        <LineGraph
          main={true}
          data={this.props.data}
          selectX={data => data.timestamp}
          selectY={data => data[this.props.dataKey]}
          dataKey={this.props.dataKey}
          width={980}
          height={320}
          margin={{
            top: 40,
            right: 20,
            bottom: 0,
            left: 20,
          }}
        />
      </div>
    )
  }
}

export default MainContainer
