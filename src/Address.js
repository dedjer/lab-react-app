// Simple React Snippet shorcuts in comments

//imrc
import React from "react";
import api from "./api/api.js";

//ccc
export default class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addresses: [] };
  }
  componentDidMount() {
    api
      .get(`addresses`)
      .then(response => {
        this.setState({ addresses: response.data._embedded.addresses });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.addresses.map(a => (
          <li key={a.id}>
            {a.street} {a.city} {a.state} {a.zipcode}
          </li>
        ))}
      </ul>
    );
  }
}
