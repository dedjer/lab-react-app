// Simple React Snippet shorcuts in comments

//imrc
import React from "react";
import { Table } from "reactstrap";

//ccc
export default class Fetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { customers: [] };
	}
	componentDidMount() {
		fetch("http://localhost:8080/customers")
			.then(response => response.json())
			.then(data => this.setState({ customers: data._embedded.customers }))
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { customers } = this.state;
		console.log({ customers });
		/* Pass json state object to child component */
		return (
			<Table striped>
				<thead>
					<tr>
						<th>Full Name Fetch</th>
					</tr>
				</thead>
				<tbody>
					{this.state.customers.map(c => (
						<tr>
							<td>{c.name}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
}
