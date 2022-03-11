import React from "react";

import { Icons } from "../components/Icons";

export const Album = (props) => {
  return (
    <div className="container">
      <div className="album-cover">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt="Album Cover" className="album-img" />
          <Icons />
        </a>
      </div>

      <div className="album-title">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <p className="albumTitle">{props.title}</p>
        </a>
      </div>

      <div className="artist-name">
        {props.album.map((artist) => {
          return (
            <a
              className="artistLink"
              key={artist.id}
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artist.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
