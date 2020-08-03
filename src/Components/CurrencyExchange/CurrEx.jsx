import React, { Component } from "react";
import axios from "axios";

// Random ID generator
const idGen = () => Math.floor(Math.random() * 100000000);

export default class CurrEx extends Component {
  constructor(props) {
    super(props);
    this.updateRate();
    this.state = {
      userInput: 0,
      rate: 1,
      firstSelectedCurrency: "USD",
      secondSelectedCurrency: "CAD",
      currencyList: [
        { title: "US Dollar", abbreviation: "USD", id: idGen() },
        { title: "Canada Dollar", abbreviation: "CAD", id: idGen() },
        { title: "Pound Sterling", abbreviation: "GBP", id: idGen() },
      ],
    };
  }

  getInitialSelectFirst = () => {
    return this.state.firstSelectedCurrency;
  };

  render() {
    return (
      <>
        <div className="unconverted">
          <label> Currency I have : </label>
          <select
            name="currency"
            id="currencyOptionsList1"
            defaultValue={this.state.firstSelectedCurrency}
            onChange={this.firstCurrencySelectionHandler}
          >
            {this.state.currencyList.map((currency) => {
              return (
                <option value={currency.abbreviation} key={currency.id}>
                  {currency.title}
                </option>
              );
            })}
          </select>
          <br />
          <input
            type="number"
            step="0.00001"
            placeholder="0.000"
            onChange={(e) => {
              this.setState({ userInput: e.target.value });
            }}
          />
        </div>
        <br />
        Rate is: {this.state.rate}
        <br />
        <div className="converted">
          <label>Currency I want : </label>
          <select
            name="currency"
            id="currencyOptionsList2"
            defaultValue={this.state.secondSelectedCurrency}
            onChange={this.secondCurrencySelectionHandler}
          >
            {this.state.currencyList.map((currency) => {
              return (
                <option value={currency.abbreviation} key={currency.id}>
                  {currency.title}
                </option>
              );
            })}
          </select>
          <br />
          <br />| | | | <output>{this.convertor()}</output>
        </div>
      </>
    );
  }
  firstCurrencySelectionHandler = (e) => {
    console.log("I was called", e.target.value);
    this.setState({ firstSelectedCurrency: e.target.value });
  };
  secondCurrencySelectionHandler = (e) => {
    console.log("I was called", e.target.value);
    this.setState({ secondSelectedCurrency: e.target.value });
  };

  // This Function gets the latest rate from European Central Bank API
  // https://exchangeratesapi.io/
  updateRate() {
    let val1 = "USD";
    let val2 = "CAD";

    axios
      .get(
        "https://api.exchangeratesapi.io/latest?symbols=" + val1 + "," + val2
      )
      .then((result) => {
        this.setState({ rate: result.data.rates.CAD });
      });
  }

  convertor = () => {
    let userInput = this.state.userInput;
    return userInput * this.state.rate;
  };
}
