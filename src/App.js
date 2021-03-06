import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="span-12">
					<NavBar />
				</header>
				<div>{this.props.children}</div>
			</div>
		);
	}
}

export default App;
