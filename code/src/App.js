import React from "react";
import data from "./data.json";
import { Album } from "./Album";

console.log(data);

export const App = () => {
  return (
    <div>
      <div>\</div>

      <section className="album-container">
        {data.albums.items.map(item => {
          return (
            <Album
              key={item.id}
              albumTitle={item.name}
              albumURL={item.external_urls.spotify}
              image={item.images[1].url}
              playIconURL={item.external_urls.spotify}
              artists={item.artists[0].name}
              link={item.external_urls.spotify}
              artists_link={item.artists[0].external_urls.spotify}
            />
          );
        })}
        ;
      </section>
    </div>
  );
};
