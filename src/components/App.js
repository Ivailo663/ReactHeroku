import React, { Component } from "react";
import Main from "./Main";
import s from "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className={s.header}>Hello from react and express</h1>
        <Main />
      </div>
    );
  }
}

export default App;
