import React, { Component } from "react";

export default class CurrEx extends Component {
  state = {
    value: 0.0,
  };
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
              this.setState({ value: e.target.value });
            }}
          />
        </div>
        <br />
        <br />
        <div className="converted">
          <label>Currency I want to convert to: </label>
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
    let currentValue = this.state.value;
    return currentValue * 1.42;
  };
}
