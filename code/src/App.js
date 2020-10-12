import React from "react";
import data from "./data.json";
import "./app.css";
import Header from "./components/Header";

console.log(data);

const App = () => {
  return (
    <section>
      <Header />
    </section>
  );
};

export default App;
