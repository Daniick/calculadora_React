import React, { useState } from "react";
import "./body.css";

const Body = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleBillChange = (e) => {
    setBillAmount(parseFloat(e.target.value) || 0);
  };

  const handleTipPercentageChange = (percentage) => {
    setTipPercentage(percentage);
    setCustomButtonClicked(false);
  };

  const handleCustomPercentageChange = (e) => {
    setTipPercentage(parseFloat(e.target.value) || 0);
  };

  const handlePeopleChange = (e) => {
    setNumberOfPeople(parseInt(e.target.value) || 1);
  };
  const handleReset = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumberOfPeople(1);
    setCustomButtonClicked(false);
  };
  const tipAmount = (billAmount * tipPercentage) / 100 / numberOfPeople;
  const totalAmount = billAmount / numberOfPeople + tipAmount;
  return (
    <div class="general-wrapper">
      <div class="data-wrapper">
        <h1>Bill</h1>
        <label for="input-bill">
          <input
            class="input-bill"
            id="input-bill"
            type="number"
            min="0"
            value={billAmount}
            onChange={handleBillChange}
          />
        </label>
        <h2>Select Tip %</h2>
        <ul>
          <li id="percentage-5">
            <button
              type="button"
              className={`percentage-button ${
                buttonClicked === 5 ? "clicked" : ""
              }`}
              value="5"
              onClick={() => handleTipPercentageChange(5)}
            >
              5%
            </button>
          </li>
          <li id="percentage-10">
            <button
              type="button"
              className="percentage-button"
              value="10"
              onClick={() => handleTipPercentageChange(10)}
            >
              10%
            </button>
          </li>
          <li id="percentage-15">
            <button
              type="button"
              className="percentage-button"
              value="15"
              onClick={() => handleTipPercentageChange(15)}
            >
              15%
            </button>
          </li>
          <li id="percentage-25">
            <button
              type="button"
              className="percentage-button"
              value="25"
              onClick={() => handleTipPercentageChange(25)}
            >
              25%
            </button>
          </li>
          <li id="percentage-50">
            <button
              type="button"
              className="percentage-button"
              value="50"
              onClick={() => handleTipPercentageChange(50)}
            >
              50%
            </button>
          </li>
          <li>
            <input
              type="number"
              placeholder="Custom"
              id="custom-percentage-button"
              class=""
              value={tipPercentage}
              onChange={handleCustomPercentageChange}
            />
          </li>
        </ul>
        <h2>Number of People</h2>
        <span id="canBe"></span>
        <label for="input-people">
          <input
            id="input-people"
            class="input-people"
            type="number"
            value={numberOfPeople}
            onChange={handlePeopleChange}
          />
        </label>
      </div>
      <div class="result-wrapper">
        <div class="result-txt">
          <div class="text-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <h3>
              $
              <span id="tip-amount" value={tipAmount.toFixed(2)}>
                {tipAmount.toFixed(2)}
              </span>
            </h3>
          </div>
          <div class="total-amount">
            <div>
              <h2>Total</h2>
              <p>/ person</p>
            </div>

            <h3>
              $<span id="total">{totalAmount.toFixed(2)}</span>
            </h3>
          </div>
        </div>
        <button
          type="button"
          id="reset-button"
          class="reset-button"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Body;
