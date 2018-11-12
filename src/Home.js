import React, { Component } from "react";
import Welcome from "./Welcome";

class Homepage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="span-12">
					<Welcome />
				</div>
			</React.Fragment>
		);
	}
}

export default Homepage;
