import React from 'react';
import './AlbumCover.css';

export const AlbumCover = (props) => {
  return (
    <div className="cover-image-container">
      <span className="icon-container">
        <img src="./icons/heart.svg" className="heart-icon" alt="heart icon" />
        <img src="./icons/play.svg" className="play-icon" alt="play icon" />
        <img src="./icons/dots.svg" className="dots-icon" alt="dots icon" />
      </span>
      <img src={props.cover} alt="album art" />
    </div>
  )
};
