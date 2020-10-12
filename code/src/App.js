import React from "react";
import data from "./data.json";
import Header from "./Header";
import Card from "./Card/Card";

export const App = () => {
  return (
    <>
      <Header />;
      {data.albums.items.map((x) => (
        <Card
          imgSrc={x.images[0].url}
          title={x.artists[0].name}
          info={"afasdfasdfsdfsdf"}
        />
      ))}
    </>
  );
};
