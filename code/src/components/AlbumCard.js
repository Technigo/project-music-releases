import React from "react";

import { ReactComponent as Heart } from "./Icons/Heart.svg";
import { ReactComponent as Play } from "./Icons/Play.svg";
import { ReactComponent as Dot } from "./Icons/Dots.svg";


export const AlbumCard = (props) => {
  const { title, artists, image, albumLink, artistLink } = props;

  return (
    <article className="album-cards">
      <div className="image-container">
        <img src={image} alt="Album cover" />
      </div>
      <div className="icons">
        <Heart className="heart" />
        <Play className="play" />
        <Dot className="dot" />
      </div>

      <a href={albumLink} target="_blank" rel="noopener noreferrer">
        <h1>{title}</h1>
      </a>
      {artists.map((artist, index) => {
        return (
          <div key={artist.name} index={index}>
            <a href={artistLink} target="_blank" rel="noopener noreferrer" >
              {artist.name}
            </a>
          </div>
        );
      })}
    </article>
  );
};
