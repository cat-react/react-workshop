import React, { Component } from 'react';
import Company from './Company';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React Workshop!</h2>
        </div>
        <p className="App-intro">
          <Company />
        </p>
      </div>
    );
  }
}

export default App;
