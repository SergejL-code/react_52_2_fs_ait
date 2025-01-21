import { useState } from "react";
import "./counter.css";
function Counter() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter(counter + 1);
  }
  function handleMinus() {
    setCounter(counter - 1);
  }
  function handleClear() {
    setCounter(0);
  }
  function handleTwo() {
    setCounter(counter + 200);
  }
  return (
    <div>
      <h1>Добавление денег</h1>
      <img
        src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
        alt=""
      />
      <div className="container">
        <button type="button" className="btn" onClick={handleMinus}>
          Убрать деньги
        </button>
        <span style={{ color: "red" }}>{counter} euro</span>
        <button type="button" className="btn" onClick={handlePlus}>
          Добавить деньги
        </button>
        <button type="button" className="btn" onClick={handleClear}>
          Очистить счёт
        </button>

        <button type="button" className="btn" onClick={handleTwo}>
          Добавлять по 200 Euro
        </button>
      </div>
    </div>
  );
}
export default Counter;
