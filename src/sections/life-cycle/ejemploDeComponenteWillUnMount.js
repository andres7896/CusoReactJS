import React, { Component } from 'react'

class ComponenteADesmontar extends Component {

    state = { windowWith: 0 }

    _updateStateWithWindowWith = () => {
        console.log('_updateStateWithWindowWith')
        this.setState({ windowWith: document.body.clientWidth })
    }

    componentDidMount () {
        this._updateStateWithWindowWith();
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWith
        )
    }

    componentWillUnmount () {
        console.log('componentWillUnMount');
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWith
        )
    }

    render () {
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowWith}</p>
            </div>
        )
    }
}

class ejemploDeComponenteWillUnMount extends Component {

    state = { mostrarComponente: true }

    render() {

        if (this.state.mostrarComponente) {
            return (
                <div>
                    <h4> Ciclo de Desmontaje: componentWillUnMount </h4>
                    <ComponenteADesmontar />
                    <button onClick={ () => this.setState({ mostrarComponente: false }) }>
                        Desmontar componente
                    </button>
                </div>
            )
        }

        return (
            <p>El componente se ha desmontado</p>
        )
    }
}

export default ejemploDeComponenteWillUnMount