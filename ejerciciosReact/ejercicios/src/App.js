import React, { Component } from 'react';
import './components/pages/styles/styles.css'
import Ejercicio1 from './components/pages/ejercicio1'
import Ejercicio2 from './components/pages/ejercicio2'
import Ejercicio3 from './components/pages/ejercicio3'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2 className="titulo">Ejercicio 1</h2>
        <Ejercicio1 
          nombre="Moshe"
          apellido="Naftali"
          edad="21"
        />
        <div className="separacion"></div>
        <h2 className="titulo">Ejercicio 2</h2>
        <ul>
          <li><Ejercicio2 fruta='Manzana'/></li>
          <li><Ejercicio2 fruta='Pera'/></li>
          <li><Ejercicio2 fruta='Sandía'/></li>
          <li><Ejercicio2 fruta='Melón'/></li>
          <li><Ejercicio2 fruta='Mango'/></li>
        </ul>
        <div className="separacion"></div>
        <h2 className="titulo">Ejercicio 3</h2>
        <Ejercicio3 />
        </header>
      </div>
    );
  }
}

export default App;
