import React from 'react'

export const AlbumCard = props => {
  const { title, artists, images } = props

  return (
    <article className="album-card">
      <img src={images[0].url} alt="Album Cover" />

      <h2>{title}</h2>

      {artists.map(artist => {
        return (
          <h3>{artist.name}</h3>)
      })}

    </article>
  )
} 
