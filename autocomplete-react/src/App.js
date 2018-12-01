import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './Autocomplete';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <Autocomplete />
      </div>
    );
  }
}

export default App;