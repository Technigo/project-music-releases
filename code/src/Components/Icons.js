import React from 'react';

const Icons = () => {
  return (
    <>
      {/*Wrapping all icons*/}
      <div className="icons--wrapper">
        {/*Wrapping one icon - HEART */}
        <div className="icon--wrapper">
          <img
            className="heart icon"
            src="../icons/heart.svg"
            alt="Save to library"
          />
        </div>

        <div className="icon--wrapper">
          {/*Wrapping one icon - PLAY */}
          <img className="play icon" src="../icons/play.svg" alt="Play" />
        </div>

        <div className="icon--wrapper">
          {/*Wrapping one icon - DOTS */}
          <img className="dots icon" src="../icons/dots.svg" alt="More" />
        </div>
      </div>
    </>
  );
};

export default Icons;
