// @flow

import React, { Component } from 'react';

import dummyData from './data/dummy.json';
import Grid from './components/Grid';
import logo from './node.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dummyData };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world! React testing</h1>
        </header>
        {/* <p className="App-intro">
          local change.
        </p>
        <p className="App-intro">
          All work and no play makes 0xjack a dull boy.
        </p> */}
        <div>
          <Grid items={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default App;
