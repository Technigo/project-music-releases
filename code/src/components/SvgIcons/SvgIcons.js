import React from 'react';
import './SvgIcons.css';

export const SvgIcons = () => {
  return (
    <div className="icons-container">
      <img
        className="heart-icon white icon"
        src="./icons/heart.svg"
        alt="heart"
        style={{ height: '1.3em', width: '1.3em' }}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
      <img
        className="play-icon white icon"
        src="./icons/play.svg"
        alt="play"
        style={{ height: '1.3em', width: '1.3em' }}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
      <img
        className="dots-icon white icon"
        src="./icons/dots.svg"
        alt="dots"
        style={{ height: '1.3em', width: '1.3em' }}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
    </div>
  );
};
