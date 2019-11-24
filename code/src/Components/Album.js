import React from 'react'
import "./Album.css"
import { ReactComponent as Heart } from "./heart.svg"
import { ReactComponent as Play } from "./play.svg"
import { ReactComponent as Dots } from "./dots.svg"

export const Album = (props) => (
  <div className="albumInfo">
    <a href={props.albumLink}>
      <img className="albumCover" src={props.image} alt="album cover" />
    </a>
    <h1>{props.title}</h1>
    <a href={props.artistLink}>
      <h3>{props.artist}</h3>
    </a>
    <div className="icons">
      <div className="heart-icon">
        <Heart />
      </div>
      <div className="play-icon">
        <Play />
      </div>
      <div className="dots-icon">
        <Dots />
      </div>
    </div >
  </div>

)


// style={{ backgroundImage: "url(${props.image})" }}