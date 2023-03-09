import React from 'react';

export const AlbumImage = ({ image, name }) => {
  return (
    <div className="albumImage">
      <img className="albumCover" src={image.url} alt={`Cover art for ${name}`} />
      <div className="albumIcons">
        <img className="heartIcon" src="./icons/heart.svg" alt="Heart icon" />
        <img className="playIcon" src="./icons/play.svg" alt="Play icon" />
        <img className="dotsIcon" src="./icons/dots.svg" alt="Dots icon" />
      </div>
    </div>
  );
};