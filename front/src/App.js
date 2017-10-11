import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar.js'
import Main from './Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Main />
      </div>
    );
  }
}

export default App;
