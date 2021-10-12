import React from "react";

const Article = (props) => {
  console.log(props);

  return (
    <article className="article">
      <img src={props.img} alt="album image" />
      <h2>{props.title}</h2>
      <p>{props.band}</p>
    </article>
  );
};

export default Article;
