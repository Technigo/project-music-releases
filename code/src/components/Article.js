import React from "react";

const Article = (props) => {
  return (
    <article className="article">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Date of publish: {new Date(props.date).toDateString()}</p>
      <img src={props.img} alt="spring view"></img>
      <div className="article-tag-container">
        {props.tags.map((tag, index) => {
          // key is added in loops only
          return <div key={tag} className="article-tag">{tag}</div>
        })}
      </div>
    </article>
  )
}

export default Article