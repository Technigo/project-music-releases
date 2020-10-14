import React from "react"

export const AlbumCard = props => {
  const { title, artists } = props


  return (
    <article className="album-cards">
      <h1>{title}</h1>
      {artists.map(artist => {
        return <p key={artist.name}>{artist.name}</p>
      })}
    </article>
  )
}
