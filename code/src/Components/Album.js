import React from 'react';
import './album.css'

export const Album = ({ link, cover, title, artists }) => {
  return (
    <article className="album-card">
      <section>
        <img src={cover} alt="Album Cover" />
        <section className="icons">
          <img className="image heart" src="icons/heart.svg" alt="heart" />
          <img className="image play" src="icons/play.svg" alt="play icon" />
          <img className="image dots" src="icons/dots.svg" alt="dots" />
        </section>
      </section>
      <h2><a href={link}>{title}</a></h2> 
      {artists.map((artist) => {
        return <h3 key={artist.id}><a href={artist.external_urls.spotify}>{artist.name}</a></h3>;
      })}
    </article>
  )
}