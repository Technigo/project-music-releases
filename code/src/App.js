import React from "react";

import data from "./data.json";
import Header from "./components/Header";
import Album from "./components/Album";

export const App = () => {
  const singles = data.albums.items.filter(album => album.album_type === "single")
  const albums = data.albums.items.filter(album => album.album_type === "album")

  return (
    <div className="main-wrapper">
      <Header />
      <main>
        <section>
          <h2>Albums</h2>
          <div className="album-wrapper">
            {albums.map((album =>
              <Album key={album.id} albums={album} />
            ))}
          </div>
        </section>
        <section>
          <h2>Singles</h2>
          <div className="album-wrapper">
            {singles.map((album =>
              <Album key={album.id} albums={album} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
};

