import React from "react";
import ReactDOM from "react-dom";
import { Person } from "./Person";

// import App from "./App";

const people = [
  { name: "Nina", title: "Ms" },
  { name: "Axel", title: "Mr" },
  { name: "Jack", title: "Mr" }
];

const App = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.name} name={person.name} title={person.title} />
        );
      })}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// React wants you to pass a key prop
