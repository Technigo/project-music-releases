import React from 'react'
// import '../index.css'

export const Card = ({ props }) => {
  return (
    <section className="album-card">
      <container className="images-container">
        <div className="icons">
          <img
            className="heart-icon"
            src="./icons/heart.svg"
            alt="like button" />
          <img
            className="play-icon"
            src="./icons/play.svg"
            alt="play button" />
          <img
            className="dots-icon"
            src="./icons/dots.svg"
            alt="more button" />
        </div>
        <img
          src={props.images[0].url}
          alt={props.name}
          className="album-img" />
      </container>
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
    </section>
  )
}

