import React from "react";

const AlbumCard = (props) => {
    return (
      
      <article className="album-card">
        <div className = "img-container">
          <img src={props.img} alt="spring view"/>
        </div>
        <div className="album-text-container">
        <h2>{props.song}</h2>
        <p className="artist-name">{props.artist}</p>
        </div>
      </article>
      
  )
}

export default AlbumCard;