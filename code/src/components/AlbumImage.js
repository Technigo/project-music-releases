import React from 'react';

export const AlbumImage = ({ image, name, link }) => {
  return (
    <div className="albumImage">
      <img className="albumCover" src={image.url} alt={`Cover art for ${name}`} />
      <div className="albumIcons">
        <a href={link} className="icons" target="_blank" rel="noopener noreferrer">
          <img className="heartIcon" src="./icons/heart.svg" alt="Heart icon" />
          <img className="playIcon" src="./icons/play.svg" alt="Play icon" />
          <img className="dotsIcon" src="./icons/dots.svg" alt="Dots icon" />
        </a>
      </div>
    </div>
  );
};