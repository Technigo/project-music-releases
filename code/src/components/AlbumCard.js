import React from "react"


export const AlbumCard = props => {
  const { title, artists, image } = props


  return (
    <article className="album-cards" > 
      <img src={props.image} alt="Album cover"/>
      <h1>{title}</h1>
      {artists.map(artist => {
        return <p key={artist.name}>{artist.name}</p>
      })}
    </article>
  )
}

