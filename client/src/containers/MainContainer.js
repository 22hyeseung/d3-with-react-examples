// node modules
import React from 'react';
import PropTypes from 'prop-types';
// project src
import LineGraph from 'components/LineGraph';
import 'scss/main.scss';

const MainContainer = props => {
  return (
    <div className="App-main-container">
      <LineGraph
        data={props.data}
        selectY={data => data[props.dataKey]}
        dataKey={props.dataKey}
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
  );
};

MainContainer.defaultProps = {
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

MainContainer.propTypes = {
  data: PropTypes.shape({
    timestamp: PropTypes.number,
    score: PropTypes.number,
    co2: PropTypes.number,
    dust: PropTypes.number,
    temp: PropTypes.number,
    humid: PropTypes.number,
    voc: PropTypes.number,
  }),
  dataKey: PropTypes.string.isRequired,
};

export default MainContainer;
