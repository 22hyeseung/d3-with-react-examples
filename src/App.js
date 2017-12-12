import React, { Component } from 'react'
import { SERVER_HOSTNAME } from 'config'
import MainContainer from 'containers/MainContainer'
import SubContainer from 'containers/SubContainer'
import './scss/main.scss'
import PickBy from 'lodash/pickBy'
import Map from 'lodash/map'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullData: [],
      errorState: false,
      isMain: {
        score: true,
        co2: false,
        dust: false,
        temp: false,
        humid: false,
        voc: false,
      },
    }
  }

  componentDidMount() {
    fetch(`${SERVER_HOSTNAME}/data`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          fullData: data,
        })
      })
      .catch(err => {
        this.setState({
          errorState: true,
        })
      })
  }

  changeMainGraph = keyName => {
    this.setState({
      mainData: keyName,
    })
  }

  render() {
    if (this.state.errorState) {
      return <h1>네트워크 요청 중 에러가 발생하였습니다.</h1>
    }
    if (!this.state.fullData.length) {
      return null
    }

    // main 그래프의 data key
    const mainDataKey = Object.keys(
      PickBy(this.state.isMain, function isTrue(value) {
        return value
      }),
    )[0]

    const subDataKeys = Object.keys(
      PickBy(this.state.isMain, function isFalse(value) {
        return !value
      }),
    )

    const flatData = this.state.fullData
    Map(this.state.fullData, (el, i, arr) => {
      flatData[i] = {
        timestamp: el.timestamp,
        score: el.score,
        co2: el.sensor.co2,
        dust: el.sensor.dust,
        temp: el.sensor.temp,
        humid: el.sensor.humid,
        voc: el.sensor.voc,
      }
    })

    return (
      <div className="App">
        <MainContainer data={flatData} dataKey={mainDataKey} />
        <SubContainer data={flatData} dataKey={subDataKeys} />
      </div>
    )
  }
}

export default App
