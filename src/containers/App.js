import React, { Component } from "react";
import Cars from "../components/Cars/Cars";

class App extends Component {
  state = {
    prod: "https://react-exp-ivaylo.herokuapp.com",
    dev: "http://localhost:3002",
    cars: [],
  };
  callingRes = () => {};

  componentDidMount() {
    fetch(`${this.state.dev}/all`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({ cars: response.data.cars });
        console.log(this.state.cars);
      });
  }
  render() {
    return (
      <div>
        <h1>Hello from react</h1>
        <button onClick={this.callingRes}>Click</button>
        <Cars cars={this.state.cars} />
      </div>
    );
  }
}

export default App;
