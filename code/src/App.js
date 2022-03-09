import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  return (
    <div>
      <Header />
      <section className="App">
        {data.albums.items.map((album) => {
          return (
            <Album
              key={album.id}
              albumName={album.name}
              artist={album.artists}
              cover={album.images[1].url}
              albumLink={album.external_urls.spotify}
            />
          );
        })}
      </section>
    </div>
  );
};
