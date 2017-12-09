import React, { Component } from 'react'
import LineGraph from 'components/LineGraph'

class MainContainer extends Component {
  render() {
    return (
      <div style={{ border: 'solid 1px skyblue' }}>
        <h1>MainContainer</h1>
        <LineGraph
          data={this.props.data}
          width={960}
          height={320}
          size={[960, 320]}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        />
      </div>
    )
  }
}

export default MainContainer
