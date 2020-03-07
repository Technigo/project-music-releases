import React from "react";
import data from "./data.json";
export const AlbumCover = () => {
  return (
    <div className="AlbumCover">
      {data.albums.items.map(item => {
        return (
          <a key={item.id} href={item.external_urls.spotify}>
            <img key={item.id} src={item.images[2].url} alt="album cover"></img>{" "}
          </a>
        );
      })}
    </div>
  );
};
export default AlbumCover;
