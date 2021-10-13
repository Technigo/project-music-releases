import React from 'react'

export const Album = (props) => {
    return (
      <article className="album">
        
      <div className="cover-image">
        
        <img className ="image" src={props.img} alt="album cover" />
        
        <div className="icons">
          <img className="heart-icon" src="icons/heart.svg" alt="" />
          <img className="play-icon"  src="icons/play.svg" alt="" />
          <img className="dots-icon"  src="icons/dots.svg" alt="" />
        </div>

      </div> 

        <a className="albumLink" href={props.albumLink} target="_blank">
          <h2 className="title">{props.title}</h2>
        </a>
        <a className="artistLink" href={props.artistLink} target="_blank">
          <p className="artist">{props.artist}</p>
        </a>


      </article>

      )
} 
