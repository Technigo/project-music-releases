import React from 'react'
import IconDots from 'icons/dots.svg'
import IconHeart from 'icons/heart.svg'
import IconPlay from 'icons/play.svg'


const Image = ({ coverImage, url }) => {
  return (

    <a href={url} target="_blank" >
      <img className="album-image" src={coverImage[1].url} alt="album-cover" />
      <div className="image-icon">
        <img className="icon" src={IconHeart} alt="heart-icon" />
        <img className="icon play" src={IconPlay} alt="play-icon" />
        <img className="icon" src={IconDots} alt="dots-icon" />
      </div>
    </a>


  )
}

export default Image





/*<a href={url} target="_blank" className="image-container">
<img className="album-image" src={coverImage[1].url} alt="album-cover" />
<div className="image-icon">
  <img src={IconDots} alt="dots-icon" />
</div>
</a>*/