import React from 'react';
import './Albumcovers.css';

export const Albumcovers = ({ cover }) => {
  return (
    <div className="image-container">
      <span className="icons-container">
        <img src="./icons/heart.svg" alt="heart icon" className="Icons" />
        <img src="./icons/play.svg" alt="play icon" className="Icons" />
        <img src="./icons/dots.svg" alt="dots icon" className="Icons" />
      </span>
      <img className="AlbumCovers" src={cover} alt="album cover" />
    </div>)
}