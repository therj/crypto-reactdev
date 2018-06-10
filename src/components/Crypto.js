import React, { Component } from 'react'
import './Crypto.css'

class Crypto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 'bitcoin',
          price: '1',
        },
        {
          id: 'ethereum',
          price: '1',
        },
      ],
    }
  }
  render() {
    let crypto = this.state.data.map(currency => (
      <li key={currency.id}>
        <h3>{currency.id}</h3>
        <h4>$ {currency.price} </h4>
      </li>
    ))

    return (
      <div className="crypto-container">
        <ul className="crypto">{crypto}</ul>
      </div>
    )
  }
}

export default Crypto
