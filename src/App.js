import React, { useEffect, useState } from 'react'
import axios from 'axios'
import'./App.css'
import Coins from './Coins';

const App = () => {

  const [ search, setSearch ] = useState( '' )
  const [coins, setCoins] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect( () => {
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    )
      .then( res => setCoins( res.data ) )
      .catch( err => console.log(err))
  }, [])

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className='main'>
      <h1 className='heading1'>cryptocurrency prices look-up</h1>
      <form>
        <input
          type='text'
          className='form-input'
          placeholder='search'
          value={search}
          onChange={handleChange}
        />
      </form>
      <Coins coins={filteredCoins} />
    </div>
  );
}

export default App

