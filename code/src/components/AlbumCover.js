import React from "react";

export const AlbumCover = () => {
  return (
    <div className="cover-icon-container">
      <div className="cover-container">
        <img src="#" alt="Album Cover"></img>
      </div>
      <div className="icon-container">
        <img
          className="heart"
          src="./public/icons/heart.svg"
          alt="Heart Icon"
        ></img>
        <img
          className="play"
          src="./public/icons/play.svg"
          alt="Play Icon"
        ></img>
        <img
          className="dots"
          src="./public/icons/dots.svg"
          alt="Dots Icon"
        ></img>
      </div>
    </div>
  );
};
