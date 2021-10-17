import React from "react";
import data from "./data.json";
import stretch from "./stretch-goal.json";

// components//
import { Header } from "./components/Header";
import { Albumcard } from "./components/Albumcard";
import { Footer } from "./components/Footer";
import { Playlist } from "./components/Playlist";

export const App = () => {
  const albumArray = data.albums.items;
  const playlists = stretch.playlists.items;

  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        <div className="main-wrapper">
          {albumArray.map((album) => {
            return (
              <Albumcard
                key={album.id}
                image={album.images[0].url}
                name={album.name}
                hrefAlbum={album.external_urls.spotify}
                artists={album.artists.map((item, index) => (
                  <a target="_blank" rel="noopener noreferrer" key={item.href} href={item.external_urls.spotify}>
                    {item.name}
                  </a>
                ))}
              />
            );
          })}
        </div>
        <Playlist key={playlists.id} playlists={playlists} />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
