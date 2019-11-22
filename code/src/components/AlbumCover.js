import React from "react"
import "./albumcover.css"

export const AlbumCover = props => (
  <div className='album-cover'>
    <img src={props.image} alt='Album Cover'></img>
    <div className='moreDetails'>
      <p>HEJHEJ</p>
    </div>
  </div>
)
