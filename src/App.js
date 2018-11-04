import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./Customer";
import Vehicle from "./Vehicle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="span-12" />
        <body>
          <div className="span-12">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Customer />

          <Vehicle />
        </body>
      </div>
    );
  }
}

export default App;
