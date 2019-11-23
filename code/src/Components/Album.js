import React from "react";
import { Icons } from "Components/Icons";

export const Album = props => {
  return (
    <div className="album-container">
      <div className="album-wrapper">
        <img
          src={props.album.images[1].url}
          alt="album cover"
          className="album-image"
        />
        <Icons />
      </div>

      <a className="album-link" href={props.album.external_urls.spotify}>
        <h2>{props.album.name}</h2>
      </a>
      <a className="artist-link" href={props.album.external_urls.spotify}>
        {props.album.artists.map(artist => (
          <h3>{artist.name}</h3>
        ))}
      </a>
    </div>
  );
};
