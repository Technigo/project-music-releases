import React from "react";

import data from "./data.json";

import { Album } from "./components/Album";

import { Artist } from "./components/Artist";

console.log(data);

export const App = () => {
  return (
    <section>
      <div className="albums-container">
        {data.albums.items.map((item) => (
          <div className="album-container">
            <Album name={item.name} img={item.images[1].url} />
            {data.artists.items.map((artist) => (
              <p>
                <Artist name={artist.name} />
              </p>
            ))}
          </div>
        ))}
        ;
      </div>
    </section>
  );
};
