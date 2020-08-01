import React, { Component } from "react";
import axios from "axios";
export default class CurrEx extends Component {
  state = {
    userInput: 0,
    rate: 1,
    currencyList: [
      { title: "US Dollar", abbreviation: "USD", id: this.idGen() },
      { title: "Canada Dollar", abbreviation: "CAD", id: this.idGen() },
      { title: "Pound Sterling", abbreviation: "GBP", id: this.idGen() },
    ],
  };

  constructor(props) {
    super(props);
    this.updateRate();
  }

  render() {
    return (
      <>
        <div className="unconverted">
          <label> Currency I have : </label>
          <select name="coutries" id="countries" defaultValue="USD">
            {this.state.currencyList.map((currency) => {
              <option value={this.state.currencyList.abbreviation}>1</option>;
            })}
            {/* 
            <option value="USD">US Dollar</option>
            <option value="Canada">Canadian Dollar</option>
            <option value="GBP">UK Pound</option> */}
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
        Rate is: {this.state.rate}
        <br />
        <div className="converted">
          <label>Currency I want : </label>
          <select name="coutries" id="countries" defaultValue="GBP">
            <option value="USD">US Dollar</option>
            <option value="Canada">Canadian Dollar</option>
            <option value="GBP">UK Pound</option>
          </select>
          | | | | <output>{this.convertor()}</output>
        </div>
      </>
    );
  }

  // Random ID generator
  idGen = () => Math.floor(Math.random() * 100000000);

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
  getAbbreviation = (currency) => currency.abbreviation;
  getTitle = (currency) => currency.title;
}
