import React from 'react'
import 'albumcover.css'

export const AlbumCover = ({ bananaimage }) => {
  console.log(bananaimage)
  return (

    < div className="AlbumCover" style={{ backgroundImage: `url(${bananaimage})` }}>
    </div >

  )
}