import React, { Component } from 'react'

export class FetchExample extends Component {

    state = { bpi: {} }

    componentDidMount () {
        fetch ('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                const { bpi } = data
                this.setState({ bpi })
            })
    }

    _renderCurrencies () {
        const { bpi } = this.state
        console.log(bpi)
        return Object.keys(bpi)
                     .map(currency => {
                        return (
                            <div key={ currency }>
                                1 BTC is <strong>{ bpi[currency].rate }</strong>
                                <span> { currency }</span>
                            </div>
                        )
                        }
                     )
    }
    
    render() {
        return (
            <div>
               <h4>Fetch Example</h4> 
               { this._renderCurrencies() }
            </div>
        )
    }
}

export default FetchExample

