import React, { Component } from "react";
// import s from "./Registration.css";

class Registration extends Component {
  state = {
    form: {
      email: "",
      name: "",
      password: "",
    },
  };

  changeHandler = (event) => {
    const { form } = this.state;
    form[event.target.name] = [event.target.value];

    this.setState({
      form: form,
    });
  };
  log = (e) => {
    e.preventDefault();
    console.log(this.state.form);
  };
  render() {
    return (
      <form>
        <p>{this.state.form.email} email</p>
        <p>{this.state.form.name} password</p>

        <input type="text" name="email" onChange={this.changeHandler} />
        <input type="text" name="name" onChange={this.changeHandler} />
        <input type="password" name="password" onChange={this.changeHandler} />
        <button onClick={this.log}>click</button>
      </form>
    );
  }
}

export default Registration;
