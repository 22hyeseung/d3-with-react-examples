import React, { Component } from 'react'
import Graph from 'components/Graph'
import './scss/main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Graph />
        </header>
      </div>
    )
  }
}

export default App
