import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Header from "components/Header";

export const App = () => {
  const musicData = data.albums.items;
  console.log(musicData);

  return (
    <div className="grid-container">
      <>
        <Header />
        {musicData.map((album) => {
          return (
            <div className="album-wrapper">
              <Album
                key={album.id}
                albumimage={album.images[1].url}
                songtitle={album.name}
              />
              <Artist item={album} />
            </div>
          );
        })}
      </>
    </div>
  );
};
