import React, { Component } from "react";

export default class Counter extends Component {
  //   state = {
  //     counterNum: "",
  //   };

  render() {
    return (
      //   <div add={this.props.addToCounter}>Counter : {this.props.counterNum}</div>
      <div>Counter : {this.props.counterNum}</div>
    );
  }
}
