import React, { Component } from "react";

export default class CurrDropDown extends Component {
  render() {
    return (
      <>
        Hello : <output>{this.props.data.rate}</output>
        <select
          name="currency"
          id="currencyOptionsList1"
          defaultValue={this.props.data.firstSelectedCurrency}
          onChange={this.porps.onChangeHandler()}
        >
          {this.props.data.currencyList.map((currency) => {
            return (
              <option value={currency.abbreviation} key={currency.id}>
                {currency.title}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}
