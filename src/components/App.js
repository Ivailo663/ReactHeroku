import React, { Component } from "react";

class App extends Component {
  state = {
    prod: "https://react-exp-ivaylo.herokuapp.com",
    dev: "http://localhost:3002",
  };
  callingRes = () => {
    fetch(`${this.state.prod}/asdf`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
    console.log("doing something");
  };
  render() {
    return (
      <div>
        <h1>Hello from react</h1>
        <button onClick={this.callingRes}>Click</button>
      </div>
    );
  }
}

export default App;
