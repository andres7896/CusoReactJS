import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Box extends Component{
  render () {
    return (
      <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
        { this.props.children }
      </div>
    )
  }
}

class Articule extends Component{

  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render () {

    const { title, author, date, children } = this.props

    return (
      <section>
        <h2>{ title }</h2>
        { author && <p><em>Escrito por { author }</em></p> }
        <Box>{ date }</Box>
        <article>
          { children }
        </article>
      </section>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>PropTypes</h4>
        <Articule
          
          date={ new Date().toLocaleDateString() }
          title='Articulo sobre la prop children' 
        >
          <p>El contenido que envolvemos dentro del componente Articule será enviado al componente como this.props.children</p>
          <strong>Y mantener las etiquetas y componentes que se hayan añadido dentro.</strong>
        </Articule>
      </div>
    );
  }
}

export default App;