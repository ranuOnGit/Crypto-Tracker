import React from 'react';
import './Coin.css'

const Coins = ({ coins }) => {
  return (
    <div>
      {coins.map((el) => {
        const {
          id,
          name,
          symbol,
          image,
          market_cap,
          current_price,
          price_change_percentage_24h,
        } = el;
        return (
          <div key={id} className='coin-div'>
            <img className='coin-img' src={image} alt={name} />
            <h1 className='coin-name'>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
            <p className='coin-price'>${current_price}</p>
            <p className='coin-price'>${market_cap.toLocaleString()}</p>
            {price_change_percentage_24h < 0 ? (
              <p className='coin-red'>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className='coin-green'>
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Coins;
