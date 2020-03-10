import React from 'react'
import { Heart } from 'Icons'
import { Play } from 'Icons'
import { Dots } from 'Icons'

export const AlbumImage = (props) => {
  const { images } = props

  return (
    <div>
      <img src={images[0].url} alt="Album Cover" />
      <div className="icons-container">
        <Heart />
        <Play />
        <Dots />
      </div >
    </div >
  )
}