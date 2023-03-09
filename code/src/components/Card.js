import React from 'react'
// import '../index.css'

export const Card = ({ props }) => {
  return (
    <div className="album-card">
      <img
        // key={props.image.id}
        src={props.images[0].url}
        alt={props.name}
        className="album-img" />
      <h2>
        <a
          // key={props.external_urls.spotify.id}
          href={props.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="album-name">
          <p className="break-word">{props.name}</p>
        </a>
      </h2>
      <h3>
        {props.artists.map((artist) => (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-container">
            <span className="artist-name">{artist.name}</span>
          </a>
        ))}
      </h3>
    </div>
  )
}

