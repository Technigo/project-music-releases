import React from "react";
import data from "./data.json";
import AlbumCard from "./components/AlbumCard";
import Header from "./components/Header";

export const App = () => {
  return (
    <div className="site-container">
      <Header />

      <section className="grid-for-album">
        {data.albums.items.map(item => {
          return (
            <AlbumCard
              img={item.images[1].url}
              song={item.name}
              key={item.id}
              hrefAlbum={item.external_urls.spotify}
              artist={item.artists}
            />
          );
        })}
      </section>
    </div>
  );
};
