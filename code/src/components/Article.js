import React from 'react'

const Article = (props) => {

return (
  <article>
    <div className="album-container">
        <img className="album-image" alt="Album cover" src={props.img} />
        <div className="icons-container"></div>
    </div>
        <a href={props.album}>
            <p className="album-title">{props.title}</p>
        </a>
        <a href={props.artist}>
            <p className="artist">{props.description}</p>
        </a>
  </article> 
  //   <article className="article">
  //   <h2>{props.title}</h2>
  //   <p>{props.description}</p>
  //   <p>this is world</p>
  //   <img src={props.img} />
  //   <div className="article-tag-container">
  //     <div className="article-tag">weather</div>
  //     <div className="article-tag">europe</div>
  //     <div className="article-tag">spring</div>
  //   </div>
  // </article>
)
}

export default Article 