import React from 'react'
import data from './data.json'
import AlbumImage from './AlbumImage'
import AlbumText from './AlbumText'


const Album = () => {
  return (
  <div className="album-container">
    <AlbumImage />
    <AlbumText />
  </div>
  )
  
}

export default Album