import React from "react";
import Child from "./Child";
import { Jumbotron } from "reactstrap";

class Parent extends React.Component {
	constructor(props) {
		super(props);

		this.handler = this.handler.bind(this);

		this.state = {
			colors: [
				"primary",
				"secondary",
				"success",
				"info",
				"warning",
				"danger",
				"link"
			],
			color: "primary"
		};
	}

	handler() {
		this.setState({
			color: this.chooseColor()
		});
	}

	chooseColor() {
		var randomColor = this.state.colors[
			Math.floor(Math.random() * this.state.colors.length)
		];
		return randomColor;
	}

	render() {
		return (
			<Jumbotron>
				<Child color={this.state.color} action={this.handler} />
			</Jumbotron>
		);
	}
}

export default Parent;
