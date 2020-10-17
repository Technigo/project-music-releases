import React from "react"


export const AlbumCard = props => {
  const { title, artists, image, coverLink} = props


  return (
    <article className="album-cards" > 
    <a href={props.coverLink} target="_blank">
      <img src={props.image} alt="Album cover"/>
      </a>
      <h1>{title}</h1>
      {artists.map(artist => {
        return <p key={artist.name}>{artist.name}</p>
      })}
    </article>
  )
}

