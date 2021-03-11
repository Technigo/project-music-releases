import React from 'react'
import './Albums.css'


export const Albums = (props) => {
  return ( 
    
    <div className="album-container">
      <img className="album-image" src={props.albumContent.images[1].url} alt="Album-image"></img> 
      <div className="icons-container">
        <div className="icons">
          <img className="icon-heart" src="icons/heart.svg"/>
          <img className="icon-play" src="icons/play.svg"/>
          <img className="icon-dots" src="icons/dots.svg"/>
        </div>
      </div>
    </div>
    
  )
}
