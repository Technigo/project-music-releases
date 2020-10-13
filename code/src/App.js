import React from "react";
import data from "./data.json";
import "./Style.css";
import Header from "./Header";
import Card from "./Card/Card";

export const App = () => {
  return (
    <>
      <Header />
      <div className="cards__container">
        {data.albums.items.map((x) => (
          <Card
            imgSrc={x.images[0].url}
            title={x.name}
            info={x.artists[0].name}
          />
        ))}
      </div>
    </>
  );
};
