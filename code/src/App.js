import React from "react";
import data from "./data.json";
import "./index.css";
import { Albums } from "./Albums";
import { Header } from "./Header";

console.log(data);

export const App = () => {
  return (
    <header>
      <Header />
      <div className="Album">
        {data.albums.items.map(album => (
          <Albums
            key={album.id + album.name}
            image={album.images[1].url}
            name={album.name}
            artist={album.artists[0].name}
            albumURL={album.external_urls.spotify}
            artistURL={album.artists[0].external_urls.spotify}
          />
        ))}
      </div>
    </header>
  );
};

/*

export const App = () => {
  return (
    <header>
      <Header />
      <Albums />
    </header>
  );
};


*/
