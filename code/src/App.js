import React from "react";
import data from "./data.json";

import Album from "./components/Album";
import Header from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header title="New albums and singles" />
      <div className="album-container">
        {data.albums.items.map((album) => {
          return (
            /* Here we render album items */
            <Album
              key={album.id}
              link={album.external_urls.spotify}
              artists={album.artists}
              name={album.name}
              image={album.images[0]}
            />
          );
        })}
      </div>
    </div>
  );
};
