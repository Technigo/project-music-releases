import React from "react";

import Artist from "./Artist";
import Overlay from "./Overlay";

const Album = ({ albums }) => {
  const url = `${albums.external_urls.spotify}`
  return (
    <figure className="album-content">
      <div className="image-wrapper">
        <img
          src={albums.images[1].url}
          className="image"
          alt={`${albums.name} cover`}
        />
        <Overlay url={url} />
      </div>
      <a
        href={albums.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer">
        <figcaption className="album-title">{albums.name}</figcaption>
      </a>
      {albums.artists.map((artist =>
        <Artist key={artist.id} artists={artist} />
      ))}
    </figure>
  )
};

export default Album;

