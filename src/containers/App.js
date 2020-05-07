import React, { Component } from "react";
import Cars from "../components/Cars/Cars";
import Navbar from '../components/navbar/Navbar'
import Gallery from '../components/Gallery/Gallery'
import Auxiliary from '../hoc/Auxiliary'
import s from './App.css'

class App extends Component {
  state = {
    prod: "https://react-exp-ivaylo.herokuapp.com",
    dev: "http://localhost:3002",
    cars: [],
  };
  callingRes = () => {};

  componentDidMount() {
    fetch(`${this.state.prod }/all`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({ cars: response.data.cars });
        console.log(this.state.cars);
      });
  }
  render() {
    return (
      <Auxiliary>
        <Navbar/>
        <Cars cars={this.state.cars} />
        <Gallery/>  
      </Auxiliary>
    );
  }
}

export default App;
