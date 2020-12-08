import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = { mensajeInicial: 'Hola Mundo' }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ mensajeInicial: 'Cambio de Mensaje' })
  }

  render() {
    return (
      <div className="App">
        <h4>Ciclo de Montaje: Contructor</h4>
        { this.state.mensajeInicial }
        <br></br>
        <button onClick={ this.handleClick }>
          Cambiar Mensaje
        </button>
      </div>
    );
  }
}

export default App;