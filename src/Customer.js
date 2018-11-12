// Simple React Snippet shorcuts in comments

//imrc
import React from "react";
import axios from "axios";
import { Container, Table, Alert } from "reactstrap";
import Address from "./Address.js";
import jsonCustomers from "./data/customers.json";

//ccc
export default class Customer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { customers: [], alert: "info" };
	}
	componentDidMount() {
		axios
			.get(`http://localhost:8080/customers`)
			.then(response => {
				this.setState({
					customers: response.data._embedded.customers,
					alert: "success"
				});
			})
			.catch(error => {
				this.setState({
					customers: jsonCustomers._embedded.customers,
					alert: "warning"
				});
				console.log(error);
			});
	}

	render() {
		/*
		const { customers } = this.state;
		console.log({ customers }); 
		*/
		/* Pass json state object to child component */
		return (
			<Container fluid="true" align="left">
				<Alert color={this.state.alert}>
					API Connection Status: {this.state.alert}
				</Alert>
				<Table striped>
					<thead>
						<tr>
							<th>Full Name</th>
						</tr>
					</thead>
					<tbody>
						{this.state.customers.map(c => (
							<tr key={c.id}>
								<td>{c.name}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Address addresses={this.state.customers.addresses} />
			</Container>
		);
	}
}
