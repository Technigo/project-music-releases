import React from 'react'
import 'albumcover.css'
import { Dots, Heart, Play } from './icons'

export const AlbumCover = ({ bananaimage }) => {
  console.log(bananaimage)
  return (

    < div className="AlbumCover" style={{ backgroundImage: `url(${bananaimage})` }}>
          
            <Heart/>
            <Play/>
            <Dots />
            
      
    </div >

  )
}