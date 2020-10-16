import React from 'react'
import { Dots } from './Icons'
import { Play } from './Icons'
import { Heart } from './Icons'


const Album = props => {
  return (
    <article className="album-cards">
      <a className="album-container" href={props.link} target="_blank" rel="noopener noreferrer">
        <img className="album-image" src={props.images} alt="image of album"></img>
        <div className="icon-container">
          <Heart />
          <Play />
          <Dots />
        </div>
      </a>
      <a className="album-text" href={props.link} target="_blank" rel="noopener noreferrer">
        {props.name}
      </a>
      <div className="artist-text-container">
        {props.artists.map(artist => {
          return (
            <a className="artist-text" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              {artist.name}
            </a>)
        })}
      </div>
    </article>

  )

}

export default Album