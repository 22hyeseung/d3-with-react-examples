import React, { Component } from 'react'
import MainContainer from 'containers/MainContainer'
import SubContainer from 'containers/SubContainer'
import './scss/main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
        <SubContainer />
      </div>
    )
  }
}

export default App
