import React, { Component } from 'react'
import { SERVER_HOSTNAME } from 'config'
import MainContainer from 'containers/MainContainer'
import SubContainer from 'containers/SubContainer'
import './scss/main.scss'
import PickBy from 'lodash/pickBy'

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

    return (
      <div className="App">
        <MainContainer data={this.state.fullData} dataKey={mainDataKey} />
        <SubContainer data={this.state.fullData} dataKey={mainDataKey} />
      </div>
    )
  }
}

export default App
