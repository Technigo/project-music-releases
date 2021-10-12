import React from "react";

const AlbumCard = (props) => {
    return (
      
      <article className="album-card">
        <div class = "img-container">
          <img src={props.img} alt="spring view"/>
        </div>
        <h2>{props.song}</h2>
        <p>{props.artist}</p>
      </article>
      
  )
}

export default AlbumCard;