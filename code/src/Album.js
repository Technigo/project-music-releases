import React from 'react'

import './album_style.css'





// Album card
export const Album = (props) => {
  console.log(props)
  return (
    <div className="Card">
      <div className="album-container">
        <img className="album-image" src={props.image} alt="Album artwork"></img>
        <p className="song-title"> {props.title} </p>
        <a className="artist-name"> {props.name} </a>
      </div>
      <div></div>
      
    </div>
  )
}