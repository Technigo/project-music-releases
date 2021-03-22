import React from 'react'

import IconDots from 'icons/dots.svg'
import IconHeart from 'icons/heart.svg'
import IconPlay from 'icons/play.svg'

const Image = ({coverImage, url}) => {
  return (

    <a 
    href={url} 
    rel="noopener noreferrer"
    >
      <img className="album-image" src={coverImage[0].url} alt="album-cover" />
      <div className="image-icon">
        <img className="icon" src={IconHeart} alt="heart-icon" />
        <img className="icon play" src={IconPlay} alt="play-icon" />
        <img className="icon" src={IconDots} alt="dots-icon" />
      </div>
    </a>
  )
}

export default Image
