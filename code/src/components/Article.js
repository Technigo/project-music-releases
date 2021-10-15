import React from "react";
import Artists from './Artists'

const Article = (props) => {
  return (
    <article className="album">
      {/* call Hover here */}
      <img src={props.img} alt="spring view"></img>      
      <h2>{props.title}</h2>
      <Artists artists={props.artists}/>
    </article>
  )
}

export default Article