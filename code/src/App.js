import React from "react";
import data from "./data.json";
import Album from "./components/Album";

export const App = () => {
  const musicData = data.albums.items;
  console.log(musicData);
  return (
    <div className="container">
      <>
        {musicData.map((album) => {
          return (
            <Album
              key={album.id}
              albumimage={album.images[1].url}
              songtitle={album.name}
              artist={album.artists}
            />
          );
        })}
      </>
    </div>
  );
};
