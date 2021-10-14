import React from "react";

const Article = (props) => {
  return (
    <article className="article">
      <div className="img-container">
        <div className="overlay"></div>
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
