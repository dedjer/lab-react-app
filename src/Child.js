import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class Child extends React.Component {
	render() {
		return (
			<div>
				<h1>The button color is {this.props.color}</h1>
				<Button color={this.props.color} onClick={this.props.action}>
					Switch
				</Button>
			</div>
		);
	}
}

Child.propTypes = {
	color: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};

export default Child;
