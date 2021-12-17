import React from "react";

export const Icons = (props) => {
  return (
    <div className="icons-container">
      <img className="icon" src="/icons/heart.svg" alt="heart" />
      <a
        href={props.albumLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon-play" src="/icons/play.svg" alt="play" />
      </a>
      <img className="icon" src="/icons/dots.svg" alt="dots" />
    </div>
  );
};

export default Icons;
