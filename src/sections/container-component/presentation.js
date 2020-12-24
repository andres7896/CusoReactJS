import React, { Component } from 'react'

/*export class BitCoinPrice extends Component {

    _renderCurrencies () {
        
        const { bpi } = this.props

        return Object.keys(bpi).map(currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span> {bpi[currency].code} </span>
            </div>
        ))

    }

    render() {
        return (
            <div>
                <h4>Bitcoin Price Index</h4>
                { this._renderCurrencies() }
            </div>
        )
    }
}*/

function BitCoinPrice (props) {

    const _renderCurrencies = () => {
        
        const { bpi } = props

        return Object.keys(bpi).map(currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span> {bpi[currency].code} </span>
            </div>
        ))

    }

    return(
        <div>
            <h4>Bitcoin Price Index</h4>
            { _renderCurrencies() }
        </div>
    )
}

export default BitCoinPrice
