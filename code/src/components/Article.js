import React from 'react'

const Article = (props) => {

return (
    <article className="article">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>this is world</p>
    <img src={props.img} />
    <div className="article-tag-container">
      <div className="article-tag">weather</div>
      <div className="article-tag">europe</div>
      <div className="article-tag">spring</div>
    </div>
  </article>
)
}

export default Article 