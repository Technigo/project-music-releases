import React from 'react';

export const AlbumCover = (props) => {
  return (
    <div className="album-cover-overlay">

      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="album-cover-link">
        <img
          src={props.cover}
          alt="album cover"
          className="album-cover" />
      </a>

      <span className="icons-container">

        <img
          src="./icons/heart.svg"
          alt="heart icon"
          className="heart-icon" />

        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="./icons/play.svg"
            alt="play icon"
            className="play-icon" />
        </a>

        <img
          src="./icons/dots.svg"
          alt="dots icon"
          className="dots-icon" />

      </span>

    </div>
  );
};