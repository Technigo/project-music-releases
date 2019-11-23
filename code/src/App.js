import React from "react";
import data from "./data.json";
import { Album } from "Components/Album";

export const App = () => {
  return (
    <div className="app">
      <header>
        <h1>New albums and singles</h1>
      </header>
      <div className="app-components">
        {data.albums.items.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
