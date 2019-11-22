import React from "react"
import "./albuminfo.css"

export const AlbumInfo = props => (
  <div className='album-info'>
    <h2>{props.name}</h2>
    <h3>{props.artist}</h3>
  </div>
)
