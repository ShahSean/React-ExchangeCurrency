import React, { Component } from "react";

export default class CurrDropDown extends Component {
  render() {
    return (
      <>
        Hello : <output>{this.props.data.rate}</output>
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
      </>
    );
  }
}
