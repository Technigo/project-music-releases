import React from 'react';
import heartBtn from '../icons/heart.svg';
import playBtn from '../icons/play.svg';
import infoBtn from '../icons/dots.svg';

const Buttons = () => {
  return (
    <div className="btnContainer">
      <button type="button" id="heartBtn" className="heartBtn">
        <img src={heartBtn} alt="Heart button" />
      </button>
      <button type="button" id="playBtn" className="playBtn">
        <img src={playBtn} alt="Play button" />
      </button>
      <button type="button" id="infoBtn" className="infoBtn">
        <img src={infoBtn} alt="Information button" />
      </button>

    </div>
  );
}

export default Buttons;