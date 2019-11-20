import React from "react";
import data from "./data.json";

export const Album = () => {
  return (
    <div>
      {data.albums.items.map(album => {
        return <div key={album.id}>
          <img src={album.images[1].url} alt="Album cover"></img>
          {album.name} - {album.artists[0].name}
        </div>
      })}
    </div>
  );
}
