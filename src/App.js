import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bios from './Components/Bios';

class App extends Component {

  render(){
    return (
      <div className="App">

        <Bios />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mike and Connor's Web App. Coming Soon...
          </p>
          <a className="App-link" href="https://github.com/connor-ruff/MikeAndConnor" target="_blank" rel="noopener noreferrer">
            Visit Our Repo</a>
        </header>
      </div>
    );
  }
}

export default App;
