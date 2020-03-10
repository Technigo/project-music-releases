import React from 'react'
import { AlbumImage } from 'AlbumImage'

export const AlbumCard = props => {
  const { title, artists, images, albumurl } = props

  return (
    <article className="album-card">

      <AlbumImage images={images} />
      <a href={albumurl}><h2>
        {title}</h2></a>

      {
        artists.map(artist => {
          return (
            <a href={artist.external_urls.spotify}><h3 key={artist.name} >{artist.name} </h3></a>)
        })
      }

    </article >
  )
} 
