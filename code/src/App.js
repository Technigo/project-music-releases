import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  return (
    <>
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          {data.albums.items.map((item) => {
            return <Album key={item.id} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};
