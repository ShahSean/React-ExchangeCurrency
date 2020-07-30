import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Button from "./Components/Button/Button.jsx";
import Counter from "./Components/Counter/Counter.jsx";

export default class App extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <div>
        <Header />
        <br />

        <div className="App">
          <p>Press the button to raise the number:</p>
          <Counter counterNum={this.state.number} />
          <br />
          <br />
          <Button add={this.addToCounter} />
        </div>
      </div>
    );
  }

  addToCounter = (e) => {
    console.log("clicked");
    let newCounter = this.state.number;
    newCounter++;
    this.setState({ number: newCounter });
  };
}
