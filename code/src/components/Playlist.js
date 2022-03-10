import React from "react";
import { ReactComponent as Heart } from "icons/heart.svg";
import { ReactComponent as Play } from "icons/play.svg";
import { ReactComponent as Dots } from "icons/dots.svg";

const Playlist = ({ playlist }) => {
  return (
    <figure className="album-content">
      <div className="image-wrapper">
        <img src={playlist.images[0].url} className="image" alt={`${playlist.name} playlist`}></img>
        <div className="overlay">
          <Heart className="heart-icon" />
          <Play className="play-icon" onClick={(e) => {
            e.preventDefault();
            window.open(`${playlist.external_urls.spotify}`)
          }} />
          <Dots className="dots-icon" />
        </div>
      </div>
      <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer"><figcaption className="album-title">{playlist.name}</figcaption></a>
    </figure>
  )
};

export default Playlist;

