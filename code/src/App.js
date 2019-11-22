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
      <Albums />
    </header>
  );
};

/*



export const App = () => {
  return (
    <header>
      <Header />

      <div className="Album">
        {data.albums.items.map(album => (
          <Albums
            key={album.image + album.name}
            image={album.images[1].url}
            name={album.name}
            artist={album.artist}
          />
        ))}
      </div>
    </header>
  );
};
*/
