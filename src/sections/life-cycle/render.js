import React, { Component } from 'react';
import './App.css';

const HelloRender = (props) => <h1>Hola render!</h1> 

class App extends Component {
  render(){
    return[
      <HelloRender key='A'/>,
      <p key='B'>Bienvendidos</p>,
      <HelloRender key='C'/>,
      <button key='D'>Hello</button>
    ]
  }    
}

export default App;