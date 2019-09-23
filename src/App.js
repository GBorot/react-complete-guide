import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working !!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="19" />
        <Person name="Gautier" age="28">
          My hobbies : Electronic music
        </Person>
        <Person name="Andromaque" age="2600" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Hi, I'm a React app")
    // );
  }
}

export default App;
