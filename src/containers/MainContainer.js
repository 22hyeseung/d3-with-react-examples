import React, { Component } from 'react'
import LineGraph from 'components/LineGraph'
import find from 'lodash/find'
import 'scss/containers/mainContainer.scss'

class MainContainer extends Component {
  render() {
    return (
      <div className="Main-container">
        <LineGraph
          data={this.props.data}
          selectX={data => data.timestamp}
          selectY={data => data[this.props.dataKey]}
          dataKey={this.props.dataKey}
          width={980}
          height={320}
          size={[960, 320]}
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
