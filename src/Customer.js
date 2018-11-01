// Simple React Snippet shorcuts in comments

//imrc
import React from "react";
import axios from "axios";

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
    return (
      <ul>
        {this.state.customers.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    );
  }
}
