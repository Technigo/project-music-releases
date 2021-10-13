import React from "react";

const Artist = (props) => {
  console.log(props);
  return (
    <article className="article">
      <div className="icons">
        <img className="img-heart" src="./icons/heart.svg" />
        <img className="img-play" src="./icons/play.svg" />
        <img className="img-dot" src="./icons/dots.svg" />
      </div>

      <img className="artist-img" src={props.img} alt="spring view" />
      <h2>{props.title}</h2>
      <a href={props.musicLink} target="_blank">
        <p>{props.artistName}</p>
      </a>
    </article>
  );
};

export default Artist;
