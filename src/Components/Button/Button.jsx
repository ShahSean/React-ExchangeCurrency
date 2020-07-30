import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="add-btn" onClick={this.props.add}>
          Add
        </button>
      </div>
    );
  }
}
