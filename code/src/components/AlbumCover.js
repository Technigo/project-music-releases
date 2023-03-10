import React from 'react';

export const AlbumCover = (props) => {
  return (
    <div className="album-cover-overlay">

      <a href={props.link} target="_blank" rel="noreferrer" className="album-cover-link">
        <img src={props.cover} alt="album-cover" className="album-cover" />
      </a>

      <span className="icons-container">

        <img src="./icons/heart.svg" className="heart-icon" alt="heart icon" />
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src="./icons/play.svg" className="play-icon" alt="play icon" />
        </a>
        <img src="./icons/dots.svg" className="dots-icon" alt="dots icon" />

      </span>

    </div>
  );
}

export default AlbumCover;