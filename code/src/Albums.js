import React from "react"
import 'Albums.css'

export const Albums = (props) => (
  <div className="album-name">
    <a href={props.albumUrl}>{props.albumName}</a>

  </div>

)