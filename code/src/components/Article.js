import React from "react";

const Article = (props) => {
    return (
    <article className="article">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.description}</p>
    <img src={props.img} alt="spring view"/>
    <div className = "article-tag-container">
      <div className = "article-tag">{props.weather}</div>
      <div className = "article-tag">{props.weather}</div>
      <div className = "article-tag">{props.weather}</div>
    </div>
  </article>
  )
}

export default Article;