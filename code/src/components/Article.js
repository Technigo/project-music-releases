import React from "react";

const Article = (props) => {
  console.log(props);
  return (
    <article className="article">
      <h2>{props.title}</h2>
      <p>{props.id}</p>
      <p>{props.description}</p>
      <p>{props.releasedate}</p>
      <img src={props.img} alt="image preview" />
      <div className="article-tag-container">
        <div className="article-tag">tag</div>
        <div className="article-tag">tag</div>
        <div className="article-tag">tag</div>
      </div>
    </article>
  );
};

export default Article;
