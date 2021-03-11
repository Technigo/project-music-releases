import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
  const generateDelimiter = (index, arrayLength) => {
    if (index === arrayLength - 2) {
      return ' & '
    } else if (index < arrayLength - 2) {
      return ', '
    } 
    
    return ''
  }

  return (
    <div className="album-card">
      <div className="album-cover">
        <a href={props.albumLink}>
          <img className="album-cover-image" src={props.images[0].url} alt={props.albumName} /> 
        </a>

          <div className="icons">
            <img className="icon-heart" src="/icons/heart.svg" alt="Heart icon" />
            <img className="icon-play grow" src="/icons/play.svg" alt="Play icon" />
            <img className="icon-dots" src="/icons/dots.svg" alt="Dots icon" />
          </div>
      </div>

      <a className="album-name" href={props.albumLink}>{props.albumName}</a>
      
      <p>{props.artists.map((artist, index, array) => {
          return (
            <span className="artist-links">
              <Artist 
              key={artist.id}
              url={artist.external_urls.spotify}
              name={artist.name}
              />
              <span>{generateDelimiter(index, array.length)}</span>
            </span>
          )
      })  
      }
      </p>
    </div>
  )
}

