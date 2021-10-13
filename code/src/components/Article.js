import React from "react";

const Article = (props) => {
  return (
    <article className="article">
      {/* call Hover here */}
      <img src={props.img} alt="spring view"></img>      
      <h2>{props.title}</h2>
      <div>{props.artists.map((artist) => {
        return <p key={artist.name}>{artist.name}</p>
      })}</div>
    </article>
  )
}

export default Article