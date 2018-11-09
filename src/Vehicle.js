// Simple React Snippet shorcuts in comments

//imrc
import React, { Component } from "react";
import axios from "axios";

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
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {this.state.vehicles.map(v => (
            <li key={v.id}>{v.make}</li>
          ))}
        </tbody>
      </Table>
    );
  }
}
