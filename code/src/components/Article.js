import React from "react";

export const Article = (props) => {
  
    return (
    <article className="album">

      <div className="album-cover">
        <a href={props.articleDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <img className="album-image" src={props.articleDetails.images[1].url} alt="album cover" />
        </a>         
        <div className="icons">
          <img className="icon" src="/icons/heart.svg" alt="heart icon" />
          <a href={props.articleDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <img className="play" src="/icons/play.svg" alt="play icon" />
          </a> 
          <img className="icon" src="/icons/dots.svg" alt="dots icon" />
        </div>
      </div>
      {/* ===== ALBUM TITLE ===== */}
      <a href={props.articleDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="title">{props.articleDetails.name}</a>

      {/* ===== ARTIST ===== */}
      <div className="artist-container">
       {props.articleDetails.artists.map((eachartist) => {
       return <a href={eachartist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artist" key={eachartist.id} >{eachartist.name} </a>
     })}</div>
    </article>
    )
}
      


       
   