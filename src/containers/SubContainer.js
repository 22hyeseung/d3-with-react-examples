import React from 'react'
import LineGraph from 'components/LineGraph'
import 'scss/main.scss'

const SubContainer = props => {
  return (
    <div className="App-sub-container">
      {props.dataKeys.map((dataKey, i) => {
        return (
          <LineGraph
            changeMainGraph={props.changeMainGraph}
            main={false}
            key={i}
            data={props.data}
            selectX={data => data.timestamp}
            selectY={data => data[dataKey]}
            dataKey={dataKey}
            width={145}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 20,
              left: 20,
            }}
          />
        )
      })}
    </div>
  )
}

export default SubContainer
