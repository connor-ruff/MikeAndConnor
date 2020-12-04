import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Bios from './Components/Bios';


class App extends Component {

  render(){
    return (
      <div className="App">
        <Bios />

      </div>
    );
  }
}

export default App;
// hey