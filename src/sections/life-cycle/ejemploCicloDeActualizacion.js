import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';


const ANIMAL_IMAGES = {
    panda: 'https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg',
    cat: 'https://i.pinimg.com/originals/4e/55/83/4e5583748bc4000805df50e4ebcafffc.png',
    dolphin: 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d28552bc-fa5c-8490-d79c-015d45de422e/630x355.jpg'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component{
    state ={ src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps (nextProps) {
        console.clear()
        console.log('1. componentWillReceivePorps');

        if (this.props.animal !== nextProps.animal) {
            this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })   
        }
    }

    shouldComponentUpdate (nextProps) {
        console.log("2. shouldComponentUpdate")
        return this.props.animal !== nextProps.animal
    }

    componentWillUpdate (nextProps, nextState) {
        console.log("3. componentWillUpdate", nextProps, nextState)
        const img  = document.querySelector('img')
        console.log('from img element', { alt: img.alt })
        // Web animation API
        img.animate([ {
            filter: 'blur(0px)'
        }, {
            filter: 'blur(2px)'
        } ], {
            duration: 500,
            easing: 'ease'
        })
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("4. componentDidUpdate")
        const img = document.querySelector('img')
        img.animate([ {
            filter: 'blur(2px)'
        }, {
            filter: 'blur(0px)'
        } ], {
            duration: 1500,
            easing: 'ease'
        })
    }

    render(){
        console.log("Render");
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        )
    }
}

AnimalImage.protoType = {
    animal: PropTypes.oneOf(ANIMALS)
}

/*AnimalImage.defaultProps = {
    animal: 'panda'
}*/

class ejemploCicloDeActualizacion extends Component {

    state = { animal: 'panda' }

    _renderAnimalButton = (animal) => {
        return (
            <button 
                //disabled={ animal === this.state.animal }
                key={animal} 
                onClick={ () => this.setState( { animal } ) }>
                {animal}
            </button>
        )
    }

    render() {
        return (
            <div>
                <h4>Ciclo de Actualización, Ejemplo de: ShouldComponentUpdate</h4>
                { ANIMALS.map(this._renderAnimalButton) }
                <AnimalImage animal={ this.state.animal }/>
            </div>
        )
    }
}

export default ejemploCicloDeActualizacion