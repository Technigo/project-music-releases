import React from 'react'
// import '../index.css'

export const Card = ({ props }) => {
  return (
    <div className="album-card">
      <img
        // key={props.image.id}
        src={props.images[1].url}
        alt={props.name}
        className="album-img" />
      <h1>
        <a
          // key={props.external_urls.spotify.id}
          href={props.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="album-name">
          {props.name}
        </a>
      </h1>
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

