import React from "react";

const Album = ({ albumLink, title, img }) => {
  return (
    <article className="article">
      <div className="image-container">
        <div className="icons-container">
          <div className="icons">
            <img className="img-heart" src="./icons/heart.svg" alt="heart" />
            <img className="img-play" src="./icons/play.svg" alt="play" />
            <img className="img-dot" src="./icons/dots.svg" alt="dot" />
          </div>
        </div>
        <img src={img} alt="album-img" />
      </div>

      <a href={albumLink}>
        <h2>{title}</h2>
      </a>
    </article>
  );
};

export default Album;
