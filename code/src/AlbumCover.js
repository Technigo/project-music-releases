import React from 'react'

export const AlbumCover = ({ bananaimage }) => {

  return (

    < div className="AlbumCover">
      <img src={bananaimage[1].url} alt="album-cover" />
    </div >

  )
}