import React from 'react';
import LineGraph from 'components/LineGraph';
import PropTypes from 'prop-types';
import 'scss/main.scss';

const SubContainer = props => {
  return (
    <div className="App-sub-container">
      {props.dataKeys.map((dataKey, i) => {
        return (
          <LineGraph
            changeMainGraph={props.changeMainGraph}
            main={false}
            data={props.data}
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
        );
      })}
    </div>
  );
};

SubContainer.defaultProps = {
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
};

SubContainer.propTypes = {
  data: PropTypes.shape({
    timestamp: PropTypes.number,
    score: PropTypes.number,
    co2: PropTypes.number,
    dust: PropTypes.number,
    temp: PropTypes.number,
    humid: PropTypes.number,
    voc: PropTypes.number,
  }),
  dataKeys: PropTypes.arrayOf.isRequired,
  changeMainGraph: PropTypes.func.isRequired,
};

export default SubContainer;
