import React, { Component } from 'react'
import LineGraph from 'components/LineGraph'

class SubContainer extends Component {
  render() {
    return (
      <div style={{ border: 'solid 1px black' }}>
        <h1>SubContainer</h1>
        <LineGraph
          data={this.props.data}
          width={190}
          height={53.3}
          size={[190, 53.3]}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        />
        <LineGraph
          data={this.props.data}
          width={190}
          height={53.3}
          size={[190, 53.3]}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        />
        <LineGraph
          data={this.props.data}
          width={190}
          height={53.3}
          size={[190, 53.3]}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        />
        <LineGraph
          data={this.props.data}
          width={190}
          height={53.3}
          size={[190, 53.3]}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        />
        <LineGraph
          data={[0, 1, 2, 3, 4, 5]}
          width={190}
          height={53.3}
          size={[190, 53.3]}
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

export default SubContainer
