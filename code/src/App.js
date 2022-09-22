import React from "react";
import data from "./data.json";
import "./index.css";

import { AlbumCard } from "./components/AlbumCard";
import { Header } from "./components/Header";

// import AlbumCard
// import Header

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        {data.albums.items.map((item) => {
          return (
            <AlbumCard
              key={item.id}
              title={item.name}
              artist={item.artists}
              albumUrl={item.external_urls.spotify}
              coverImg={item.images}
            />
          );
        })}
      </div>
    </>
  );
};
