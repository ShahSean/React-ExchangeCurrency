import React, { Component } from "react";
import axios from "axios";
export default class CurrEx extends Component {
  state = {
    userInput: 0,
    firstCurrency: [
      { title: "US Dollar", abbreviation: "USD" },
      { title: "Canada Dollar", abbreviation: "CAD" },
      { title: "Pound Sterling", abbreviation: "GBP" },
    ],
    secondCurrency: [
      { title: "US Dollar", abbreviation: "USD" },
      { title: "Canada Dollar", abbreviation: "CAD" },
      { title: "Pound Sterling", abbreviation: "GBP" },
    ],
  };

  render() {
    return (
      <>
        <div className="unconverted">
          <label> Currency I have : </label>
          <select name="coutries" id="countries">
            {this.state.firstCurrency.map((currency) => {
              <option value={this.getAbbreviation(currency)}>
                {this.getTitle(currency)}
              </option>;
            })}
            {/*               
            <option value={this.state.firstCurrency.abbreviation}>
              {this.state.firstCurrency.title}
            </option>
            <option value="Canada">Canadian Dollar</option>
            <option value="UK">UK Pound</option> */}
          </select>
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
        <br />
        <div className="converted">
          <label>Currency I want : </label>
          <select name="coutries" id="countries">
            <option value="UK">UK Pound</option>
            <option value="US">US Dollar</option>
            <option value="Canada">Canadian Dollar</option>
          </select>
          | |----> <output>{this.convertor()}</output>
        </div>
      </>
    );
  }
  convertor = () => {
    let val1 = "USD";
    let val2 = "CAD";
    axios
      .get(
        "https://api.exchangeratesapi.io/latest?symbols=" + val1 + "," + val2
      )
      .then((res) => console.log(res.data.rates.CAD));
    let currentValue = this.state.userInput;
    return currentValue * 1.42;
  };
  getAbbreviation = (currency) => currency.abbreviation;
  getTitle = (currency) => currency.title;
}
