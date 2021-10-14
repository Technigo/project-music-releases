import React from "react";

const Album = ({ img, title, albumLink }) => {
  return (
    <article className="article-box">
      <div className="icon-image-wrapper">
        <div className="icon-wrapper">
          <img
            className="heart-icon icon"
            src="./icons/heart.svg"
            alt="heart"
          />
          <a href={albumLink}>
            <img className="play-icon icon" src="./icons/play.svg" alt="play" />
          </a>

          <img
            className="dots-icon icon"
            src="./icons/dots.svg"
            alt="dots"
          ></img>
        </div>
        <img className="album-img" src={img} alt={title} />
      </div>

      <p className="album-name">{title}</p>
    </article>
  );
};
export default Album;
