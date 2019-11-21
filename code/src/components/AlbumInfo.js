import React from "react"
import "./albuminfo.css"

export const AlbumInfo = props => (
  <div className='album'>
    <h2>{props.name}</h2>

    <div className='moreDetails'></div>
  </div>
)
