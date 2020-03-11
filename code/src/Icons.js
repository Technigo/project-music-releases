import React from 'react'
import PlayIcon from './icons/play.svg'
import DotsIcon from './icons/dots.svg'
import HeartIcon from './icons/heart.svg'

export const Icons = () => {
  return (
    <div className="icons">
      <img src={HeartIcon} />
      <img className="play-icon" src={PlayIcon} />
      <img src={DotsIcon} />
    </div>
  )
}