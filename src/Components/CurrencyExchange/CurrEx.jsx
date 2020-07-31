import React, { Component } from "react";
import axios from "axios";
export default class CurrEx extends Component {
  state = {
    userInput: 0,
    firstCurrency: [
      { title: "US Dollar", abreviation: "USD" },
      { title: "Canada Dollar", abreviation: "CAD" },
      { title: "Pound Sterling", abreviation: "GBP" },
    ],
    secondCurrency: [
      { title: "US Dollar", abreviation: "USD" },
      { title: "Canada Dollar", abreviation: "CAD" },
      { title: "Pound Sterling", abreviation: "GBP" },
    ],
  };
  componentDidMount() {
    let val1 = "USD";
    let val2 = "CAD";
    axios
      .get(
        "https://api.exchangeratesapi.io/latest?symbols=" + val1 + "," + val2
      )
      .then((res) => console.log(res.data.rates.CAD));
  }
  render() {
    return (
      <>
        <div className="unconverted">
          <label> Currency I have : </label>
          <select name="coutries" id="countries">
            <option value="US">US Dollar</option>
            <option value="Canada">Canadian Dollar</option>
            <option value="UK">UK Pound</option>
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
}
