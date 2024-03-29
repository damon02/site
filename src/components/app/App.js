import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="intro">
          <h1 className="name">Damon Asberg</h1>
        </div>
        <h2 className="description">
          Front-end developer
        </h2>
        <div className="socials">
          <a href="mailto:damon@damon.dev" target="_self" rel="noopener noreferrer">
            <div className="socialbutton mail"/>
          </a>
          <a href="https://www.github.com/damon02" target="_blank" rel="noopener noreferrer">
            <div className="socialbutton github"/>
          </a>
          <a href="https://www.linkedin.com/in/damon02/" target="_blank" rel="noopener noreferrer">
            <div className="socialbutton linkedin"/>
          </a> 
        </div>
        <h2 className="mail">damon@damon.dev</h2>
        <div className="copy">&copy; 2021 - damon.dev</div>
      </div>
    )
  }
}

export default App
