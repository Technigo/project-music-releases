/* eslint-disable linebreak-style */
import React from 'react';
import heartIcon from '../icons/heart.svg';
import dotsIcon from '../icons/dots.svg';
import playIcon from '../icons/play.svg';

export const Icons = () => {
  return (
    <div className="icon-wrapper">
      <img src={heartIcon} alt="heart icon over album" width="30px" height="30px" />
      <img src={playIcon} alt="play icon over album" width="30px" height="30px" />
      <img src={dotsIcon} alt="dot icon over album" width="30px" height="30px" />
    </div>
  )
}