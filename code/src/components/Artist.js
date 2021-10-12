import React from "react";

const Artist = (props) => {
  console.log(props);
  return (
    <article className="article">
      <img src={props.img} alt="spring view" />
      <div className="icons">
        <img className="img-heart" src="./icons/heart.svg" />
        <img className="img-play" src="./icons/play.svg" />
        <img className="img-dot" src="./icons/dots.svg" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
};

export default Artist;
