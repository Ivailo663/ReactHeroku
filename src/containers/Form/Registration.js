import React, { Component } from "react";
// import s from "./Registration.css";

class Registration extends Component {
  state = {
    formControls: {
      email: {
        value: "",
      },
      name: {
        value: "",
      },
      password: {
        value: "",
      },
    },
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    });
  };

  render() {
    return (
      <form>
        <p>{this.state.formControls.email.value}</p>
        <p>{this.state.formControls.name.value}</p>

        <input
          type="email"
          name="email"
          value={this.state.formControls.email.value}
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="name"
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
        />

        <input
          type="password"
          name="password"
          value={this.state.formControls.password.value}
          onChange={this.changeHandler}
        />
      </form>
    );
  }
}

export default Registration;
