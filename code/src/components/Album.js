import React from "react";

const Album = ({ img, title, albumLink }) => {
  return (
    <article className="article-box">
      <div className="icon-image-wrapper">
        <div className="icon-wrapper">
          <img className="heart-icon icon" src="./icons/heart.svg" />
          <a href={albumLink}>
            <img
              className="play-icon icon"
              src="./icons/play.svg"
              alt="playbutton"
            />
          </a>
          <img className="dots-icon icon" src="./icons/dots.svg"></img>
        </div>
        <img class="album-img" src={img} alt={title} />
      </div>

      <p className="album-name">{title}</p>
    </article>
  );
};
export default Album;
