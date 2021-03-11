import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Header from "./components/Header";

console.log(data);

// Albums array
const albums = data.albums.items;
console.log(albums);

export const App = () => {
  return (
    <>
      <Header />

      <div className="album-container">
        {albums.map((album) => {
          return (
            <Album
              key={album.id}
              image={album.images[1].url}
              name={album.name}
              artists={album.artists}
              albumURL={album.external_urls.spotify}
              artistURL={album.artists[0].external_urls.spotify}
            />
          );
        })}
      </div>
    </>
  );
};
