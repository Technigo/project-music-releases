import React from 'react'

export const Album = (props) => {
  return (
    <div>
      <img src={props.image} alt="Album" />
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