import React, { Component } from 'react'
import { SERVER_HOSTNAME } from 'config'
import MainContainer from 'containers/MainContainer'
import SubContainer from 'containers/SubContainer'
import './scss/main.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      errorState: false,
    }
  }

  componentDidMount() {
    fetch(`${SERVER_HOSTNAME}/data`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
        })
      })
      .catch(err => {
        this.setState({
          errorState: true,
        })
      })
  }

  render() {
    if (this.state.errorState) {
      return <h1>네트워크 요청 중 에러가 발생하였습니다.</h1>
    }
    if (!this.state.data.length) {
      return null
    }
    return (
      <div className="App">
        <MainContainer data={this.state.data} />
        <SubContainer data={this.state.data} />
      </div>
    )
  }
}

export default App
