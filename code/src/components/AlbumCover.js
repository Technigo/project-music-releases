import React from "react"
import "./albumcover.css"
import { ReactComponent as HeartIcon } from "../icons/heart.svg"
import { ReactComponent as PlayIcon } from "../icons/play.svg"
import { ReactComponent as DotsIcon } from "../icons/dots.svg"

export const AlbumCover = props => (
  <div className='album-cover'>
    <img src={props.image} alt='Album Cover'></img>
    <div className='moreDetails'>
      <HeartIcon className='heart-icon' />
      <PlayIcon className='play-icon' />
      <DotsIcon className='dots-icon' />
    </div>
  </div>
)
