import React, { Component } from "react";
import Customer from "./Customer";
import Vehicle from "./Vehicle";
import Welcome from "./Welcome";

class Homepage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="span-12">
					<Welcome />
				</div>
				<Customer />
				<Vehicle />
			</React.Fragment>
		);
	}
}

export default Homepage;
