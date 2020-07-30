import React, { Component } from "react";
import comp1 from "./Mycomp";
import "./App.css";
import Mycomp from "./Mycomp";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      Hello
      <br />
      <Mycomp />
    </div>
  );
}

export default App;
