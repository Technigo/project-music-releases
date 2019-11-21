import React from 'react'

export const Album = (props) => {
  return (
    <div className="album">
      <div className="album-cover">
        <img className="album-img" src={props.image} alt="Album" />
        <div className="icons">
          <img className="icon-heart" src="icons/heart.svg" alt="Heart" />
          <img className="icon-play" src="icons/play.svg" alt="Play" />
          <img className="icon-dots" src="icons/dots.svg" alt="Dots" />
        </div>
      </div>
      <div className="album-info">
        <div className="album-title">
          <a href={props.albumURL}>{props.albumTitle}</a>
        </div>
        <div className="artist-name">

          {props.artists.map((artist) => {

            return <a key={artist.external_urls.spotify} href={artist.external_urls.spotify}>{artist.name}</a>

          })}

        </div>
      </div>
    </div>

  )
}