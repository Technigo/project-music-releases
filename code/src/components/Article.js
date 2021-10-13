import React from "react";

const Article = (props) => {
  return (
    <article className="article">
      <div class="img-container">
        <div class="overlay"></div>
        <img src={props.img} alt="album image" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.artist}</p>
    </article>
  );
};

export default Article;
