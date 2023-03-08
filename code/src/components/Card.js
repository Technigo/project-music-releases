import React from 'react'
import '../index.css'

export const Card = ({ props }) => {
  return (
    <div className="album-card">
      <img src={props.images[1].url} alt={props.name} />
      <h1>{props.name}</h1>
      <h2>
        {props.artists.map((artist) => (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-container">
            <span>{artist.name}</span>
          </a>
        ))}
      </h2>
    </div>
  )
}

