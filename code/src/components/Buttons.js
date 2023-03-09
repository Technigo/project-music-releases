import React from 'react';
// import infoBtn from './icons/dots.svg';//
// import heartBtn from './icons/heart.svg';//
// import playBtn from './icons/play.svg';//
import '../button.css';

const Buttons = () => {
  return (
    <div className="btnContainer">
      <button type="button" id="heartBtn" className="heartBtn">
        <img src="../icons.heart.svg" alt="Heart button" />
      </button>
      <button type="button" id="playBtn" className="playBtn">
        <img src="../icons.play.svg" alt="Play button" />
      </button>
      <button type="button" id="infoBtn" className="infoBtn">
        <img src="../icons.dots.svg" alt="Information button" />
      </button>

    </div>
  );
}

export default Buttons;