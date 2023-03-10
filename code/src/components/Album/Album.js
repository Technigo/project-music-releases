import React from 'react';
import { Artist } from '../Artist/Artist';
import './Album.css';

export const Album = (props) => {
  return (
    /* show album details */
    <div className="album">
      <div className="imgAndIcons">
        <img className="AlbumImg" src={props.albumDetails.images[0].url} alt="Album Cover" />
        <div className="icon-img">
          <img className="dots-img" src="/icons/dots.svg" alt="dots icon" />
          <img className="play-img" src="./icons/play.svg" alt="play-icon" />
          <img className="heart-img" src="./icons/heart.svg" alt="heart icon" />
        </div>
      </div>
      <div className="albumNames">
        <p>{props.albumDetails.name}</p>
        <Artist artists={props.albumDetails.artists} />
      </div>
    </div>
  );
};
