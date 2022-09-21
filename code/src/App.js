import React from "react";
import data from "./data.json";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  return (
    <>
      {data.albums.items.map((item) => {
        return <Header key={data.id} data={item} />;
      })}
    </>
  );
};
