import React from "react";
import data from "./data.json";
import AlbumCard from "./components/AlbumCard";
import Header from "./components/Header";

export const App = () => {
  console.log(data.albums.items[1].images[0]);
  console.log(data.albums.items[0].name);
  console.log(data.albums.items[0].artists[0].name);
  console.log(data.albums.items[0].external_urls.spotify);
  console.log(data.albums.items[0].artists[0].external_urls.spotify)

  return (
    <div className="site-container">
      <Header />

      <section className="grid-for-album">
        {data.albums.items.map(item => {
          return (
            <AlbumCard
              img={item.images[1].url}
              song={item.name}
              key={item.name}
              hrefAlbum={item.external_urls.spotify}
              artist={item.artists}
            />
          );
        })}
      </section>
    </div>
  );
};

// TO DO
// 1. hover effects
// 2. links to song, artist
// 3. 