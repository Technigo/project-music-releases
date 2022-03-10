import React from "react";
import { ReactComponent as Heart } from "icons/heart.svg";
import { ReactComponent as Play } from "icons/play.svg";
import { ReactComponent as Dots } from "icons/dots.svg";

import Artist from "./Artist";

const Album = ({ albums }) => {
  return (
    <figure className="album-content">
      <div className="image-wrapper">
        <img src={albums.images[1].url} className="image" alt={`${albums.name} album cover`}></img>
        <div className="overlay">
          <Heart className="heart-icon" />
          <Play className="play-icon" onClick={(e) => {
            e.preventDefault();
            window.open(`${albums.external_urls.spotify}`)
          }} />
          <Dots className="dots-icon" />
        </div>
      </div>
      <a href={albums.external_urls.spotify} target="_blank" rel="noopener noreferrer"><figcaption className="album-title">{albums.name}</figcaption></a>
      {albums.artists.map((artist =>
        <Artist key={artist.id} artists={artist} />
      ))}
    </figure>
  )
};

export default Album;

