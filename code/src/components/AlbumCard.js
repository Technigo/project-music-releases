import React from "react";

const AlbumCard = (props) => {
    return (
  <article className="album-card">
    <img src={props.img} alt="spring view"/>
    <h2>{props.song}</h2>
    <p>{props.artist}</p>
  </article>
  )
}

export default AlbumCard;