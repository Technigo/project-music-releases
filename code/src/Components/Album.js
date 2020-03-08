import React from 'react';
import './album.css'

export const Album = props => {
  return (
    <div className="album-card">
      <img src={props.albumCover} alt='Album Cover'></img>
      <h2>{props.albumTitle}</h2> <h3>{props.artist}</h3>
    </div>
  )
}