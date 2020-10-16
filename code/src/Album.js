import React from 'react'
import 'Album.css'

export const Album = props => {
  return (
    <div className="cover-container">
      <img src={props.url} alt={props.name} className='album-art'></img>
      <div className="overlay">
        <div className="icon-container">
          <img src="/icons/heart.svg" alt="heart icon" className="heart-icon"></img>
          <img src="/icons/play.svg" alt="play button" className="play-button"></img>
          <img src="/icons/dots.svg" alt="dots icon" className="dots-icon"></img>
        </div>
      </div>
    </div>
  )
}