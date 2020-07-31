import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Welcome</h1>
          <div>
            <Link to="/counter" style={{ color: "white" }}>
              Counter
            </Link>
            | |
            <Link to="/currencyExchange" style={{ color: "white" }}>
              Exchange Currency
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
