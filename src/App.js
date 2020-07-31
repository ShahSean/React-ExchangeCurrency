import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Button from "./Components/Button/Button.jsx";
import Counter from "./Components/Counter/Counter.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <Router>
        <div>
          <Header />
          <br />
          <Route
            exact
            path="/counter"
            render={(props) => (
              <div className="App">
                <p>Press the button to raise the number:</p>
                <Counter counterNum={this.state.number} />
                <br />
                <br />
                <Button add={this.addToCounter} />
              </div>
            )}
          />
          <Route
            exact
            path="/currencyExchange"
            render={(props) => (
              <>
                <div> Hello</div>
              </>
            )}
          />
        </div>
      </Router>
    );
  }

  addToCounter = (e) => {
    let newCounter = this.state.number;
    newCounter++;
    this.setState({ number: newCounter });
  };
}
