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
          <select name="coutries" id="countries" defaultValue="USD">
            {/* {this.state.firstCurrency.map((currency) => {
              <option value={this.getAbbreviation(currency)}>
                {this.getTitle(currency)}
              </option>;
            })} */}

            <option value="USD">US Dollar</option>
            <option value="Canada">Canadian Dollar</option>
            <option value="GBP">UK Pound</option>
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
          <select name="coutries" id="countries" defaultValue="GBP">
            <option value="USD">US Dollar</option>
            <option value="Canada">Canadian Dollar</option>
            <option value="GBP">UK Pound</option>
          </select>
          | |----> <output>{this.convertor()}</output>
        </div>
      </>
    );
  }
  convertor = () => {
    let val1 = "USD";
    let val2 = "CAD";
    let userInput = this.state.userInput;
    let rate = 1;
    axios
      .get(
        "https://api.exchangeratesapi.io/latest?symbols=" + val1 + "," + val2
      )
      .then((result) =>
        // this.rate = res.data.rates.CAD;
        {
          console.log(result);
          rate = result.data.rates.CAD;
          console.log(rate);
          console.log(result.data.rates.CAD);
        }
      );
    console.log("final rate", rate);

    return userInput * rate;
  };
  //   getAbbreviation = (currency) => currency.abbreviation;
  //   getTitle = (currency) => currency.title;
}
