import React from 'react';
import './icons.css';

const Icons = () => {
  return (
    <>
      <div className="icon__container">
        <img className="icon" src="../icons/heart.svg" alt="Heart icon" />
        <img
          className="icon icon__play"
          src="../icons/play.svg"
          alt="Play icon"
        />
        <img className="icon" src="../icons/dots.svg" alt="Dots icon" />
      </div>
    </>
  );
};

export default Icons;
