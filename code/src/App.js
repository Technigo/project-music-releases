import React from "react";
import data from "./data.json";
import "./index.css";
import Header from "./Header";
import Card from "./Card/Card";

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
