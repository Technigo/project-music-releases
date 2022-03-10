import React from "react";

import albumData from "./data.json";
import playlistData from "./stretch-goal.json";

import Header from "./components/Header";
import Album from "./components/Album";
import Playlist from "./components/Playlist";

export const App = () => {
  const singles = albumData.albums.items.filter(album => album.album_type === "single")
  const albums = albumData.albums.items.filter(album => album.album_type === "album")

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
        <section>
          <h2>Playlists</h2>
          <div className="album-wrapper">
            {playlistData.playlists.items.map((playlist =>
              <Playlist key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
};

