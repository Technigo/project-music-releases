import React from "react";
import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";


export const App = () => {
  return (
    <>
      <Header />

      <main className="grid-container">
      {data.albums.items.map((album) => {
        return (
          <Album
            key={album.name}
            albumName={album.name}
            albumImg={album.images[1].url}
            albumLink={album.external_urls.spotify}
            artists={album.artists}
          />
        );
      })}

      </main>

      
    </>
  );
};
