import React, { Component } from 'react'

export default class componentWillMount extends Component {

    constructor (props) {
        console.log('constructor');
        super(props)
        this.state = { mensajeInicial: 'Mensaje modificado' }
    }

    render() {
        console.log('render');
        return (
            <div>
                <h4>Ciclo de vida: componentWillMount</h4>
                <p>{ this.state.mensajeInicial }</p>
            </div>
        )
    }
}
