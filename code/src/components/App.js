import React from "react";

import data from "./data.json";
import { Header } from "./Header";
import { Album } from "./Album.js";

const albumArray = data.albums.items;

export const App = () => {
  return (
    <>
      <Header />
      <section className="album-wrapper">
        {albumArray.map(album => {
          return (
            <Album
              key={album.name}
              name={album.name}
              image={album.images[1].url}
              albumUrl={album.external_urls.spotify}
              artists={album.artists}
            />
          );
        })}
      </section>
    </>
  );
};
