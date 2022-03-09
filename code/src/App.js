import React from "react";

import data from "./data.json";

import { Album } from "./components/Album";

import { Artist } from "./components/Artist";

import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <div className="albums-container">
            {data.albums.items.map((album) => (
              <div className="album-container">
                <Album
                  key={album.id}
                  name={album.name}
                  img={album.images[1].url}
                  url={album.external_urls.spotify}
                />

                {album.artists.map((artist) => (
                  <Artist
                    key={artist.id}
                    name={artist.name}
                    url={artist.external_urls.spotify}
                  />
                ))}
              </div>
            ))}
            ;
          </div>
        </section>
      </main>
    </>
  );
};
