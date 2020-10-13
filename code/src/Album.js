import React from 'react'
import 'Album.css'
import { AlbumArt } from './AlbumArt'
import { AlbumText } from './AlbumText'

export const Album = (prop) => {
  return (
    <div className="Album">
      <div className="AlbumArt"></div>
      <div className="AlbumText"></div>
    </div>

  )
}