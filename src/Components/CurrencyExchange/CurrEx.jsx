import React, { Component } from "react";
import axios from "axios";
import "./CurrEx.css";
//import CurrDropDown from "./CurrDropDown";

export default class CurrEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: 0,
      rate: 1,
      firstSelectedCurrency: "USD",
      secondSelectedCurrency: "CAD",
      currencyList: [
        { title: "US Dollar", abbreviation: "USD", id: this.idGen() },
        { title: "Canadian Dollar", abbreviation: "CAD", id: this.idGen() },
        { title: "Pound Sterling", abbreviation: "GBP", id: this.idGen() },
      ],
    };
  }

  componentDidMount() {
    this.updateRate(
      this.state.firstSelectedCurrency,
      this.state.secondSelectedCurrency
    );
  }

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
            className="selec-drp-dwn"
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
            min="0.000"
            placeholder="0.000"
            className="user-input"
            onChange={(e) => {
              this.setState({ userInput: e.target.value });
            }}
          />
        </div>
        <br />
        <br />
        <div className="real-time-rate">Current Rate is: {this.state.rate}</div>
        <br />
        <br />
        <div className="converted">
          <label>Currency I want : </label>
          <select
            name="currency"
            id="currencyOptionsList2"
            defaultValue={this.state.secondSelectedCurrency}
            onChange={this.secondCurrencySelectionHandler}
            className="selec-drp-dwn"
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
          <br />
          <output>{this.convertor()}</output>
        </div>
      </>
    );
  }
  // Random ID generator
  idGen = () => Math.floor(Math.random() * 100000000);

  // Whenever the fromCurrency changes, this function will be called
  firstCurrencySelectionHandler = (e) => {
    this.setState({ firstSelectedCurrency: e.target.value });
    this.updateRate(e.target.value, this.state.secondSelectedCurrency);
  };
  // Whenever the toCurrency changes, this function will be called
  secondCurrencySelectionHandler = (e) => {
    this.setState({ secondSelectedCurrency: e.target.value });
    this.updateRate(this.state.firstSelectedCurrency, e.target.value);
  };

  // This Function gets the latest rate from European Central Bank API
  // https://exchangeratesapi.io/
  updateRate(fromCurrency, toCurrency) {
    axios
      .get(
        "https://api.exchangeratesapi.io/latest?symbols=" +
          toCurrency +
          "&base=" +
          fromCurrency
      )
      .then((result) => {
        this.setState({ rate: Object.values(result.data.rates)[0] });
      });
  }
  // Simple Coversion based on the rate
  convertor = () => {
    let userInput = this.state.userInput;
    return userInput * this.state.rate;
  };

  // getRate(fromCurrency, toCurrency) {
  //   const { rates } = this.state;
  //   // String manipulation
  //   const currency_key = `${fromCurrency}->${toCurrency}`;
  //   if (currency_key in rates) return rates[currency_key];
  //   else {
  //     // TODO: update the currency bank for the current value
  //     //       if there is another such fetch in the works, don't run it again
  //     return 1;
  //   }
  // }
}
