import React from 'react'

export const AlbumCover = ({ bananaimage }) => {

  return (

    < div className="AlbumCover">
      {
        bananaimage.map(item => {
          return <img src={bananaimage[1].url} alt="album-cover" />
        })
      }
    </div >

  )
}