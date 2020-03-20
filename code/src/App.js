import React from "react";
import data from "./data.json";
import Album from "./Album";
import Header from "./Header";


export const App = () => {
  return (
    <section>
      <section>
        <Header />
      </section>

      <section className="album-container">
        {data.albums.items.map(item => {
          return (
            <Album
              key={item.id}
              albumTitle={item.name}
              albumURL={item.external_urls.spotify}
              image={item.images[1].url}
              artists={item.artists[0].name}
              artistsURL={item.artists[0].external_urls.spotify}
            />
          );
        })}
        ;
      </section>
    </section>
  );
};
