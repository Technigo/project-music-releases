import React from "react";

import Overlay from "./Overlay";

const Playlist = ({ playlist }) => {
  const url = `${playlist.external_urls.spotify}`;
  return (
    <figure className="album-content">
      <div className="image-wrapper">
        <img src={playlist.images[0].url} className="image" alt={`${playlist.name} playlist`}></img>
        <Overlay url={url} />
      </div>
      <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer"><figcaption className="album-title">{playlist.name}</figcaption></a>
    </figure>
  )
};

export default Playlist;

