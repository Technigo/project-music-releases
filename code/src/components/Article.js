import React from "react";

export const Article = (props) => {
  console.log('props:', props)
    return (
    <article className="album">

      <div className="album-cover">
                    <img className="album-image" src={props.articleDetails.images[1].url} alt="album cover" />

                    <div className="icons">
                      <img className="icon" src="/icons/heart.svg" alt="heart icon" />
                      <img className="play" src="/icons/play.svg" alt="play icon" />
                      <img className="icon" src="/icons/dots.svg" alt="dots icon" />
                    </div>
      </div>
      {/* ===== ALBUM TITLE ===== */}
      <p className="title">{props.articleDetails.name}</p>

      {/* ===== ARTIST ===== */}
      <div className="artist-container">
       {props.articleDetails.artists.map((eachartist) => {
       return <p className="artist" key={eachartist.id} >{eachartist.name} </p>
     })}</div>
    </article>
    )
}
      


       
   