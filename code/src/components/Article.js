import React from 'react';

const Article = (props) => {
    console.log(props)

    return (
        <article className="article">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Date of publish: Monday 11th of October</p>
        <img src="" alt="Spring view" />
        <div className="article-tag-container">
        <div className="article-tag">weather</div>
        <div className="article-tag">europe</div>
        <div className="article-tag">spring</div>
        </div>
        </article>
    )
}

export default Article