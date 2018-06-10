import React, { Component } from 'react'
import Currency from './Currency'
import axios from 'axios'
import './Crypto.css'

class Crypto extends Component {
  fetchCurrencyData = () => {

  }
  componentDidMount() {

  }
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0',
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0',
        },
      ],
    }
  }
  render() {

    return (
      
    )
  }
}

export default Crypto
