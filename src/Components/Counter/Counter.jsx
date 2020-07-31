import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return <div>Counter : {this.props.counterNum}</div>;
  }
}
