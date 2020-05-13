import React, { Component } from "react";
import Cars from "../components/Cars/Cars";
import Navbar from "../components/navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";
import Auxiliary from "../hoc/Auxiliary";
import axios from "axios";
import styleContext from "../context/context";
import Registration from "../containers/Form/Registration";
import s from "./App.css";

class App extends Component {
  state = {
    prod: "https://react-exp-ivaylo.herokuapp.com",
    dev: "http://localhost:3002",
    cars: [],
    model: "Insignia",
    color: "green",
  };
  callingRes = () => {};

  componentDidMount() {
    const { model } = this.state;
    axios
      .get(`${this.state.dev}/all/${model}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => this.setState({ cars: res.data.data.cars }));
    console.log(model);
  }
  render() {
    return (
      <Auxiliary>
        <Navbar />
        <styleContext.Provider value={this.state.color}>
          <Cars cars={this.state.cars} />
        </styleContext.Provider>
        <Gallery />
        <Registration />
      </Auxiliary>
    );
  }
}

export default App;
