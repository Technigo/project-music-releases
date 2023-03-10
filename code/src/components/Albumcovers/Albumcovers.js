import React from 'react';
import './Albumcovers.css';

export const Albumcovers = ({ cover }) => {
  return (
    <div className="image-container">
      <span className="icons-container">
        <img src="./icons/heart.svg" alt="heart icon" className="heart" />
        <img src="./icons/play.svg" alt="play icon" className="play" />
        <img src="./icons/dots.svg" alt="dots icon" className="dots" />
      </span>
      <img className="AlbumCovers" src={cover} alt="album cover" />
    </div>)
}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle cx="2.5" cy="12.5" r="2.5" /><circle cx="12" cy="12.5" r="2.5" /><circle cx="21.5" cy="12.5" r="2.5" /></g></svg>
