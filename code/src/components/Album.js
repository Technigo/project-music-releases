import React from "react";

import { MusicIcons } from "./MusicIcons";
import { Artist } from "./Artist";

export const Album = props => {
  return (
    <article className="album-container">
      <div className="image-container">
        <img src={props.image} alt="Album cover" />
        <MusicIcons />
      </div>
      <p className="album-name">
        <a className="album-name" href={props.albumUrl}>
          {props.name}
        </a>
      </p>
      <div className="artist-box">
        {props.artists.map((artist, index) => {
          return (
            <Artist
              key={artist.name}
              index={index}
              length={props.artists.length}
              artistName={artist.name}
              artistUrl={artist.external_urls.spotify}
            />
          );
        })}
      </div>
    </article>
  );
};
