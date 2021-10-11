import React from "react";

const Article = (props) => {
  return (
    <article className="article">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Date of publish 2021</p>
      <img src={props.img} alt="spring view"></img>
      <div className="article-tag-container">
        <div className="article-tag">weather</div>
        <div className="article-tag">spring</div>
        <div className="article-tag">europe</div>
      </div>
    </article>
  )
}

export default Article