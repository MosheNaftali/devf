import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './saludo'
import Ciclo from './ciclo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Saludo 
            nombre="Moshe"
            apellido="Shabes"
          />
          <div className="separacion"></div>
          <Ciclo />
        </header>
      </div>
    );
  }
}

export default App;
