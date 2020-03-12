import React from 'react'
import 'albumcover.css'
import { Dots, Heart, Play } from './icons'

export const AlbumCover = ({ bananaimage }) => {
  console.log(bananaimage)
  return (

    < div className="AlbumCover" style={{ backgroundImage: `url(${bananaimage})` }}>

      <div className="BackgroundColor">
        <Heart className="Icon" />
        <Play className="Icon" />
        <Dots className="Icon" />
      </div>

    </div >

  )
}