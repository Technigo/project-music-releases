import React from "react";

import data from "./data.json";
import Header from "./Header";
import Card from "./Card/Card";

import "./index.css";

export const App = () => {
  return (
    <>
      <Header />
      <div className="cards__container">
        {data.albums.items.map((x) => (
          <Card {...x} key={x.id} />
        ))}
      </div>
    </>
  );
};
