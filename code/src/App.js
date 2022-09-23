import React from "react";
import data from "./data.json";
import Album from "./components/Album";

console.log(data);

export const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="header-title">New albums & singles</h1>
      </header>
      <section className="test">
        {data.albums.items.map((item) => {
          return <Album key={item.id} data={item} />;
        })}
      </section>
    </div>
  );
};
