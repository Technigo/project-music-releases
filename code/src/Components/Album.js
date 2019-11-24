import React from 'react'

export const Album = (props) => {
  return (
    <div className="album-container">
      <div className="icon-box">
          <img src="./icons/heart.svg" alt="Heart icon" className="icon-heart icon" /> 
          <img src="./icons/play.svg" alt="Play icon" className="icon-play icon" /> 
          <img src="./icons/dots.svg" alt="Dots icon" className="icon-dots icon" /> 
        </div>
      <a href={props.url} className="album-link">
        <img className="album-img" src={props.image} alt="Album" />
        <div className="artist-info">
          <h1 className="album-title">{props.name}</h1>
        </div>
      </a>
      {props.children}
    </div>
  )
}

