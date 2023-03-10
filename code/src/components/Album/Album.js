import React from 'react';
import { Artist } from '../Artist/Artist';
import './Album.css';

export const Album = (props) => {
  return (
    /* show album details */
    <div className="album">
      <div className="imgAndIcons">
        <img className="AlbumImg" src={props.albumDetails.images[1].url} alt="Album Cover" />
        <div className="icon-img">
          <img className="dots-img" src="/icoons/dots.svg" alt="dots icon" />
          <img className="heart-img" src="./icons/heart.svg" alt="heart icon" />
          <img className="play-img" src="./icons/play.svg" alt="play-icon" />
        </div>
      </div>
      <h2>{props.albumDetails.name}</h2>
      <Artist artists={props.albumDetails.artists} />
    </div>
  );
};
