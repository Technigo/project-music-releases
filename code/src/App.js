import React from "react";
import data from "./data.json";

// components//
import { Header } from "./components/Header";
import { Albumcard } from "./components/Albumcard";
import { Footer } from "./components/Footer";

export const App = () => {
  const albumArray = data.albums.items;
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
                  <span>{item.name}</span>
                ))}
                hrefArtists={album.artists.map((item) => item.external_urls.spotify)}
              />
            );
          })}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
