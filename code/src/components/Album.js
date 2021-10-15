import React from 'react'

export const Album = (props) => {
    return (
      <article className="album">
        <div className="cover-image">
          <img className ="image" src={props.img} alt="album cover" />
          <div className="icons">
            <img className="heart-icon" src="icons/heart.svg" alt="heart icon" />
            <img className="play-icon"  src="icons/play.svg" alt="play icon" />
            <img className="dots-icon"  src="icons/dots.svg" alt="dots icon" />
          </div>
        </div> 
          <a className="albumLink" href={props.albumLink} target="_blank" rel="noopener noreferrer">
            <h2 className="title">{props.title}</h2>
          </a>
          <h3 className="artist">{props.artist}</h3>
      </article>
      )
} 