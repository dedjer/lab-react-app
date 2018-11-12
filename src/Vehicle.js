// Simple React Snippet shorcuts in comments

//imrc
import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";

//ccc
export default class Vehicle extends Component {
	constructor(props) {
		super(props);
		this.state = { vehicles: [] };
	}
	componentDidMount() {
		axios
			.get(`http://localhost:8080/vehicles`)
			.then(response => {
				this.setState({ vehicles: response.data._embedded.vehicles });
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return (
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
						<tr>
							<td key={v.id}>{v.id}</td>
							<td>{v.year}</td>
							<td>{v.make}</td>
							<td>{v.model}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
}
