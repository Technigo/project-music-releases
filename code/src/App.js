import React from "react";
import data from "./data.json";
import { Album } from "Components/Album";

console.log(data);

export const App = () => {
  return (
    <div className="app">
      <h1>New albums and singles</h1>
      <div className="app-components">
        {data.albums.items.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
