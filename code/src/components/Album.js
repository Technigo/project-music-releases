import React from "react";

const Album = (props) => {
  return (
    <article className="album-item">
      <div className="cover-image-container">
        <img className="cover-image" src={props.image}></img>
        <div className="overlay">
          <div className="controls">
            <img
              className="heart-icon"
              src="./icons/heart.svg"
              alt="heart icon"
            />
            <img
              className="play-icon"
              src="./icons/play.svg"
              alt="play button icon"
            />
            <img
              className="dots-icon"
              src="./icons/dots.svg"
              alt="ellipsis icon"
            />
          </div>
        </div>
      </div>

      <a className="album-name" href={props.albumLink} target="_blank">
        <h2>{props.title}</h2>
      </a>
      <h3>{props.singer}</h3>
    </article>
  );
};

export default Album;
