import React from 'react'
import { AlbumImage } from 'AlbumImage'

export const AlbumCard = props => {
  const { title, artists, images } = props

  return (
    <article className="album-card">

      <AlbumImage images={images} />
      <h2>{title}</h2>

      {artists.map(artist => {
        return (
          <h3 key={artist.name}>{artist.name}</h3>)
      })}

    </article>
  )
} 
