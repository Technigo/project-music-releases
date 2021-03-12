import React from "react";
import { MenuBtns } from "./MenuBtns";
import { Artists } from "./Artists";

export const Album = (props) => {
  return (
    <div className="gallery-item">
      <div className="gallery-item__front">
        <MenuBtns />
        <div className="image-container">
          <img src={props.image} alt="album front" />
        </div>
      </div>
      <div className="gallery-item__text">
        <a className="album-name" href={props.albumLink}>
          {props.albumName}
        </a>
        <div className="artist-container">
          {props.artist.map((artist) => (
            <Artists
              key={artist.name}
              name={artist.name}
              url={artist.external_urls.spotify}
            />
          ))}
        </div>
        <div className="album-info">
          <p>Total tracks: {props.tracks}</p>
          <p>Release date: {props.release}</p>
        </div>
      </div>
    </div>
  );
};
