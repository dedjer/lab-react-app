import React, { Component } from "react";
import "./App.css";
import Customer from "./Customer";
import Vehicle from "./Vehicle";
import NavBar from "./NavBar";
import Welcome from "./Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="span-12">
          <NavBar />
        </header>
        <body>
          <div className="span-12">
            <Welcome />
          </div>
          <Customer />
          <Vehicle />
        </body>
      </div>
    );
  }
}

export default App;
