import React from "react";
import Header from "./components/Header";
import Album from "./components/Album";

import data from "./data.json";

export const App = () => {
  return (
    <>
      <Header />
      <div className="album-container">
        {data.albums.items.map((album) => (
          <Album
            img={album.images[1].url}
            title={album.name}
            albumLink={album.external_urls.spotify}
            artists={album.artists}
          />
        ))}
      </div>
    </>
  );
};
