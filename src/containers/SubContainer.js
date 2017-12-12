import React from 'react'
import LineGraph from 'components/LineGraph'
import 'scss/main.scss'

const SubContainer = props => {
  return (
    <div className="App-sub-container">
      {props.dataKey.map((el, i) => {
        return (
          <LineGraph
            className="App-sub-item"
            main={false}
            key={i}
            data={props.data}
            selectX={data => data.timestamp}
            selectY={data => data[el]}
            dataKey={el}
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
