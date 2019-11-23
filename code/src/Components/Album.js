import React from 'react'
import "./Album.css"
import { Heart } from "./Heart"

export const Album = (props) => (
  <div className="albumInfo" style={{ backgroundImage: "url(${props.image})" }}>
    <img src={props.image} alt="album cover" />
    <h1>{props.title}</h1>
    <a href={props.artistLink}>
      <h3>{props.artist}</h3>
    </a>
    <div className="icons">
      <Heart />
    </div >
  </div>

)


