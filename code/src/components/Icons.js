/* eslint-disable linebreak-style */
import React from 'react';
import heartIcon from '../icons/heart.svg';
import dotsIcon from '../icons/dots.svg';
import playIcon from '../icons/play.svg';

export const Icons = () => {
  return (
    <div className="icon-wrapper">
      <img className="heart-icon" src={heartIcon} alt="heart icon over album" />
      <img className="play-icon" src={playIcon} alt="play icon over album" />
      <img className="dots-icon" src={dotsIcon} alt="dot icon over album" />
    </div>
  )
}