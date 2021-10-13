import React from "react";

const Cover = (props) => {
  return (
    <div className="cover">
      <img
        className="cover-img"
        src={props.item.images[0].url}
        alt="Album cover"
      ></img>

      <div className="icons">
        <img
          className="icons-heart"
          src="./icons/heart.svg"
          alt="like icon"
        ></img>
        <img
          className="icons-play"
          src="./icons/play.svg"
          alt="play icon"
        ></img>
        <img
          className="icons-dots"
          src="./icons/dots.svg"
          alt="read more icon"
        ></img>
      </div>
    </div>
  );
};

export default Cover;
