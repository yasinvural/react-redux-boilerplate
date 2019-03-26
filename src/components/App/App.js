import React, { Component } from "react";
import "./App.css";
import Counter from "../Counter/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React-Redux Example</h2>
        <Counter/>
      </div>
    );
  }
}

export default App;
