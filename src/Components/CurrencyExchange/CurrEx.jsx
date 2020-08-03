import React, { Component } from "react";
import axios from "axios";

// Random ID generator
const idGen = () => Math.floor(Math.random() * 100000000);

export default class CurrEx extends Component {
  state = {
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

  constructor(props) {
    super(props);
    this.updateRate();
  }

  getInitialSelectFirst = () => {
    return this.state.firstSelectedCurrency;
  };

  render() {
    let message = "the selection is: " + this.state.firstSelectedCurrency;
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
                <option value={currency.abbreviation}>{currency.title}</option>
              );
            })}
          </select>
          <p> {message}</p>
          {/* {function bla() {
            let boo = document.queryselector("#currencyOptionsList1");
            console.log("boo value is : ", boo.value);
            return boo.value;
          }} */}
          {/* <output> This is what you have selected: {this.bla}</output> */}
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
          <select name="currency" id="currencyOptionsList2" defaultValue="GBP">
            {this.state.currencyList.map((currency) => {
              return (
                <option value={currency.abbreviation}>{currency.title}</option>
              );
            })}
          </select>
          | | | | <output>{this.convertor()}</output>
        </div>
      </>
    );
  }
  firstCurrencySelectionHandler = (e) => {
    console.log("I was called", e.target.value);
    this.setState({ firstSelectedCurrency: e.target.value });
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
