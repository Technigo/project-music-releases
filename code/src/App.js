import React from "react";
import data from "./data.json";
import Album from "./components/Album";

console.log(data);

export const App = () => {
  return (
    <>
      <h1 className="header">New albums & singles </h1>

      <section className="album-container">
        <article className="album-card">
          <img src="#" alt="#" />
          <div className="text-wrapper">
            {/* import artist/song info component here */}
          </div>
        </article>

        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </section>
    </>
  );
};
