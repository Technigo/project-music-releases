import React from 'react';
import heartBtn from 'icons/heart.svg';
import playBtn from 'icons/play.svg';
import infoBtn from 'icons/dots.svg';

const Buttons = () => {
  return (
    <div className="imgOverlay">
      <div className="iconsContainer">
        <img className="heartBtn" src={heartBtn} alt="Heart button" />
        <img className="playBtn" src={playBtn} alt="Play button" />
        <img className="infoBtn" src={infoBtn} alt="Information button" />
      </div>
    </div>
  );
}

export default Buttons;