import { useEffect, useState } from "react";

function App() {
  const [isLoad, setIsLoad] = useState(false);
  const [coins, setCoins] = useState([]);
  const [selCoinIdx, setSelCoinIdx] = useState();
  const [input, setInput] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        if (json) {
          setCoins(json);
          setSelCoinIdx(0);
          setIsLoad(true);
        }
      });
  }, []);
  const input_onChange = (e) => {
    setInput(Number(e.target.value));
  };
  const select_onChange = (e) => {
    setSelCoinIdx(e.target.value);
  };
  return (
    <div>
      <h1>The Coins!{isLoad ? <span>({coins.length})</span> : null}</h1>
      you got <input type="number" onChange={input_onChange} value={input} />$
      <br />
      {!isLoad ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={select_onChange}>
          {coins.map((i, idx) => (
            <option key={i.id} value={idx}>
              {i.name} ({i.symbol}) : ${i.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br />
      {isLoad ? (
        <span>
          you can buy {coins[selCoinIdx].symbol}{" "}
          {input / coins[selCoinIdx].quotes.USD.price} coins
        </span>
      ) : null}
    </div>
  );
}
export default App;
