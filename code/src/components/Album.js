import React from "react";
const Album = (props) => {
  return (
    <article className="article">
      <div className="icons">
        <img className="img-heart" src="./icons/heart.svg" />
        <img className="img-play" src="./icons/play.svg" />
        <img className="img-dot" src="./icons/dots.svg" />
      </div>

      <img className="artist-img" src={props.img} alt="spring view" />
      <h2>{props.title}</h2>
    </article>
  );
};

export default Album;
