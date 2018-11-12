import React from "react";
import Child from "./Child";
import { Jumbotron } from "reactstrap";

class Parent extends React.Component {
	state = { color: "blue" };
	render() {
		return (
			<Jumbotron>
				<Child color={this.state.color} />{" "}
			</Jumbotron>
		);
	}
}

export default Parent;
