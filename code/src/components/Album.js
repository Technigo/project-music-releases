import React from "react";

const Album = ({ albumLink, title, img }) => {
  return (
    <article className="article">
      <div className="icons">
        <img className="img-heart" src="./icons/heart.svg" />
        <img className="img-play" src="./icons/play.svg" />
        <img className="img-dot" src="./icons/dots.svg" />
      </div>
      <img className="artist-img" src={img} alt="album-img" />
      <a href={albumLink}>{"<h2>{title}</h2> "} </a>
    </article>
  );
};

export default Album;
