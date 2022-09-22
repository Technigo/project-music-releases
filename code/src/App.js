import React from "react";
import AlbumCard from "components/AlbumCard";
import Header from "components/Header";
import data from "./data.json";

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <section className="album-section">
        {data.albums.items.map((item) => {
          return <AlbumCard key={item.id} album={item} />;
        })}
      </section>
      <footer>
        <p>&#169;2022 by Saralie and Antonella</p>
        <p>
          Team Foxes
          <span role="img" aria-label="fox emoji">
            &nbsp;🦊&nbsp;
          </span>
          | Technigo
        </p>
      </footer>
    </>
  );
};
