// Simple React Snippet shorcuts in comments

//imrc
import React, { Component } from "react";
import axios from "axios";
import { Container, Table, Alert } from "reactstrap";
import jsonVehicles from "./data/vehicles.json";

//ccc
export default class Vehicle extends Component {
	constructor(props) {
		super(props);
		this.state = { vehicles: [], alert: "info" };
	}
	componentDidMount() {
		axios
			.get(`http://localhost:8080/vehicles`)
			.then(response => {
				this.setState({
					vehicles: response.data._embedded.vehicles,
					alert: "success"
				});
			})
			.catch(error => {
				this.setState({
					vehicles: jsonVehicles._embedded.vehicles,
					alert: "warning"
				});
				console.log(error);
			});
	}
	render() {
		return (
			<Container fluid="true" align="left">
				<Alert color={this.state.alert}>
					API Connection Status: {this.state.alert}
				</Alert>
				<Table striped>
					<thead>
						<tr>
							<th>ID</th>
							<th>Year</th>
							<th>Make</th>
							<th>Model</th>
						</tr>
					</thead>
					<tbody>
						{this.state.vehicles.map(v => (
							<tr key={v.id}>
								<td>{v.id}</td>
								<td>{v.year}</td>
								<td>{v.make}</td>
								<td>{v.model}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		);
	}
}
