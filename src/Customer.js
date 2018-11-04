// Simple React Snippet shorcuts in comments

//imrc
import React from "react";
import axios from "axios";
import { Table } from "reactstrap";
import Address from "./Address";

//ccc
export default class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8080/customers`)
      .then(response => {
        this.setState({ customers: response.data._embedded.customers });
      })
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
            <th>Full Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.customers.map(c => (
            <tr>
              <td>{c.name}</td>
            </tr>
          ))}
        </tbody>
        <Address addresses={this.state.customers.addresses} />
      </Table>
    );
  }
}
