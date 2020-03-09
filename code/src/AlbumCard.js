import React from 'react'

export const AlbumCard = props => {
  const { title, artists, images } = props

  return (
    <article>
      <img src={images[0].url} />

      <h1>{title}</h1>

      {artists.map(artist => {
        return (
          <p>{artist.name}</p>)
      })}

    </article>
  )
} 
