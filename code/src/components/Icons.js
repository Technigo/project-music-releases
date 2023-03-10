import React from 'react';
import heartIcon from 'icons/heart.svg';
import playIcon from 'icons/play.svg';
import infoIcon from 'icons/dots.svg';

const Buttons = () => {
  return (
    <div className="img-overlay">
      <div className="icons-container">
        <img className="heart-icon" src={heartIcon} alt="Heart icon" />
        <img className="play-icon" src={playIcon} alt="Play icon" />
        <img className="info-icon" src={infoIcon} alt="Information icon" />
      </div>
    </div>
  );
}

export default Buttons;