import React from 'react'
import 'Album.css'

export const Album = props => {
  return (
    <div className="coverContainer">
      <img src={props.url} alt={props.name} className='albumArt'></img>
      <div className="overlay">
        <div className="iconContainer">
          <img src="/icons/heart.svg" alt="heart icon" className="heartIcon"></img>
          <img src="/icons/play.svg" alt="play button" className="playButton"></img>
          <img src="/icons/dots.svg" alt="dots icon" className="dotsIcon"></img>
        </div>
      </div>
    </div>
  )
}