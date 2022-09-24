import React from "react";

const Icon = (props) => {
  return (
    <div className="icon-wrapper">
      <img src="./icons/heart.svg" className="icon-heart" alt="heart"></img>
      <a
        className="linked-album"
        href={props.albumLink}
        target="_blank"
        alt="link to album"
      >
        <img src="./icons/play.svg" className="icon-play" alt="play"></img>
      </a>
      <img src="./icons/dots.svg" className="icon-dots" alt="dots"></img>
    </div>
  );
};

export default Icon;
