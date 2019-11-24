import React from "react"
import "./albuminfo.css"

export const AlbumInfo = props => (
  <div className='albumInfo'>
    <div className='albumLink'>
      <a href={props.albumlink} target='_blank'>
        <h2>{props.name}</h2>
      </a>
    </div>
    <div className='artistLink'>
      <a href={props.artistlink} target='_blank'>
        <h3>{props.artist}</h3>
      </a>
    </div>
  </div>
)
