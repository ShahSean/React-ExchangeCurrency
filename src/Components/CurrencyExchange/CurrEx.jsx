import React, { Component } from "react";
import axios from "axios";

// Random ID generator
const idGen = () => Math.floor(Math.random() * 100000000);

export default class CurrEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: 0,
      rate: 1,
      rates: {},
      firstSelectedCurrency: "USD",
      secondSelectedCurrency: "CAD",
      currencyList: [
        { title: "US Dollar", abbreviation: "USD", id: idGen() },
        { title: "Canadian Dollar", abbreviation: "CAD", id: idGen() },
        { title: "Pound Sterling", abbreviation: "GBP", id: idGen() },
      ],
    };
  }

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
    this.setState({ firstSelectedCurrency: e.target.value });
    console.log("This is the  first selction: ", e.target.value);
    this.updateRate(e.target.value, this.state.secondSelectedCurrency);
  };
  secondCurrencySelectionHandler = (e) => {
    this.setState({ secondSelectedCurrency: e.target.value });
    console.log("This is the 2nd selction: ", e.target.value);

    this.updateRate(this.state.firstSelectedCurrency, e.target.value);
  };

  // This Function gets the latest rate from European Central Bank API
  // https://exchangeratesapi.io/
  // To change the base
  //https://api.exchangeratesapi.io/latest?symbols=USD,GBP&base=JPY
  updateRate(fromCurrency, toCurrency) {
    axios
      .get(
        "https://api.exchangeratesapi.io/latest?symbols=" +
          toCurrency +
          "&base=" +
          fromCurrency
      )
      .then((result) => {
        console.log("1st: ", this.state.firstSelectedCurrency);
        console.log("2nd: ", this.state.secondSelectedCurrency);
        console.log("It's", result.data.rates);
        console.log("boo", Object.values(result.data.rates)[0]);
        this.setState({ rate: Object.values(result.data.rates)[0] });
      });
  }
  // Simpel Coversion based on the rate
  convertor = () => {
    let userInput = this.state.userInput;
    return userInput * this.state.rate;
  };
}
