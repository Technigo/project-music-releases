import React from 'react'

export const AlbumOptions = (props) => {
  return (
    <div className="album-options">
      <img src="icons/heart.svg" alt="Add to favourites" className="favourite-icon icon" />
      <img src="icons/play.svg" alt="Play album" className="play-icon icon" />
      <img src="icons/dots.svg" alt="More" className="more-icon icon" />
    </div>
  )
}