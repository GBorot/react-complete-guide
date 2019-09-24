import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person.js";
import person from "./Person/Person.js";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "19" },
      { name: "Gautier", age: "28" },
      { name: "Andromaque", age: "2600" }
    ]
  });

  const [otherState, setOtherState] = useState("Some other value");

  console.log(personsState, otherState);

  const switchNameHandler = newName => {
    // console.log("Was clicked");
    // DON'T DO THIS !! this.state.persons[0].name = "Maximilian"
    setPersonsState({
      persons: [
        { name: newName, age: "28" },
        { name: "Manuel", age: "19" },
        { name: "Gautier", age: "28" },
        { name: "Andromaque", age: "2630" }
      ]
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Max", age: "28" },
        { name: event.target.value, age: "19" },
        { name: "Gautier", age: "28" },
        { name: "Andromaque", age: "2600" }
      ]
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working !!</p>
      <button style={style} onClick={() => switchNameHandler("Maximilian !!")}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        changed={nameChangedHandler}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={switchNameHandler.bind(this, "Max !")}
      >
        My hobbies : Electronic music
      </Person>
      <Person
        name={personsState.persons[3].name}
        age={personsState.persons[3].age}
      />
    </div>
  );
};
// return React.createElement(
//   "div",
//   null,
//   React.createElement("h1", { className: "App" }, "Hi, I'm a React app")
// );

export default app;
