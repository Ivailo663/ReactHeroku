import React, { Component } from "react";

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
    const cars = this.state.cars.map((el) => {
      return (
        <ul key={el._id}>
          <li>{el.brand}</li>
          <li>{el.model}</li>
          <li>{el.price}</li>
          <li>{el.km}</li>
        </ul>
      );
    });
    return (
      <div>
        <h1>Hello from react</h1>
        <button onClick={this.callingRes}>Click</button>
        {cars}
      </div>
    );
  }
}

export default App;
