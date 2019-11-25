import React from "react"
import './Albums.css'

export const Albums = (props) => (
  <div className="album-name">
    <a href={props.albumUrl} target="_blank" rel="noopener noreferrer">{props.albumName}</a>

  </div>

)