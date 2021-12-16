import React from "react";
import data from "./data.json";
import Album from "components/Album";
import Header from "components/Header";

const albumArray = data.albums.items;

export const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="album-container">
        {albumArray.map((album) => {
          return (
            <Album
              key={album.artists.id}
              artists={album.artists}
              name={album.name}
              cover={album.images[0].url}
              albumurl={album.external_urls.spotify}
            />
          );
        })}
      </div>
    </div>
  );
};
