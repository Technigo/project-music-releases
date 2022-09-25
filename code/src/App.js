import React from "react";
import data from "./data.json";

import Album from "./components/Album";

console.log(data);

export const App = () => {
  return (
    <>
      <section className="outer-wrapper">
        <header>
          <h1 className="header-title">New albums & singles</h1>
        </header>
        <section className="inner-wrapper">
          {data.albums.items.map((item) => {
            return <Album key={item.id} data={item} />;
          })}
        </section>
      </section>
    </>
  );
};
