import React from 'react'
import SubLineGraph from 'components/SubLineGraph'

const SubContainer = props => {
  return (
    <div>
      {props.dataKey.map((el, i) => {
        return (
          <SubLineGraph
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
