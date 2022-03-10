import React from 'react';
import { ReactComponent as Heart } from "icons/heart.svg";
import { ReactComponent as Play } from "icons/play.svg";
import { ReactComponent as Dots } from "icons/dots.svg";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <Heart className="heart-icon" />
      <Play className="play-icon" onClick={(e) => {
        e.preventDefault();
        window.open(props.url)
      }} />
      <Dots className="dots-icon" />
    </div>
  )
};

export default Overlay;
