import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Button from "./Components/Button/Button.jsx";
import Counter from "./Components/Counter/Counter.jsx";

export default class App extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <Header />
        <br />

        <div className="App">
          <p>Press the button to raise the number:</p>
          <Counter />
          {this.state.counter}
          <Button onClick={this.addToCounter} />
          <button onClick={this.addToCounter}>Another</button>
        </div>
      </div>
    );
  }

  addToCounter = (e) => {
    e.preventDefault();
    console.log("clicked");
    // this.state.counter++;
  };
}
