import { use, useEffect, useState } from 'react';
import './App.css';

const API_KEY =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currentCoinsPrice, setCurrentCoinsPrice] = useState(0);
  const [onPrice, setOnPrice] = useState(0);

  const onSelectChange = (e) => {
    setCurrentCoinsPrice(Number(e.target.value));
  };

  const inputOnChange = (e) => {
    setOnPrice(e.target.value);
  };

  useEffect(() => {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  console.log('카렌투 코인즈으', currentCoinsPrice);

  return (
    <>
      <h1>The Crypto Calculator!</h1>
      {loading ? (
        <strong> Loading... </strong>
      ) : (
        <>
          <input type="number" onChange={inputOnChange} />
          <select onChange={onSelectChange}>
            {coins.map((coin, index) => (
              <option key={coin.id} value={coin.current_price}>
                {coin.name} (price : {coin.current_price})
              </option>
            ))}
          </select>
          {currentCoinsPrice == 0 ? null : (
            <h1>You can Have {onPrice / currentCoinsPrice}!</h1>
          )}
        </>
      )}
    </>
  );
}

export default App;
