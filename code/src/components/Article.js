import React from "react";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as Play } from "../icons/play.svg";
import { ReactComponent as Dots } from "../icons/dots.svg";

const Article = (props) => {
  return (
    <article className="article">
      {/* <Heart className="Heart" />
      <Play className="Play" />
      <Dots className="Dots" /> */}
      <div className="img-container">
        <div className="overlay">
          {/* <Heart className="Heart" viewBox="0 0 100 100" /> */}
          <Heart className="Heart" height="50px" width="50px" />
          <Play className="Play" height="50px" width="50px" />
          {/* <Play className="Play" viewBox="0 0 100 100" /> */}
          {/* <Dots className="Dots" viewBox="0 0 100 100" /> */}
          <Dots className="Dots" height="50px" width="50px" />
        </div>
        <a href="{props.titleClick}">
          <img src={props.img} alt="album image" />
        </a>
      </div>
      <h2>{props.title}</h2>
      <a href="{props.artistClick}">
        <p>{props.artist}</p>
      </a>
    </article>
  );
};

export default Article;
