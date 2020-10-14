import React from 'react'
import { Dots } from './Icons'
import { Play } from './Icons'
import { Heart } from './Icons'


const Album = props => {
  return (
    <article className="album-cards">
      <a className="album-container" href={props.link} target="_blank">
        <img className="album-image" src={props.images} alt="Image of album cover"></img>
        <div className="icon-container">
          <Dots />
          <Play />
          <Heart />
        </div>
      </a>
      <a className="spotify-link" href={props.link} target="_blank">
        <h3>{props.name}</h3>
      </a>
        {props.artists.map(artist => {
        return (
        <a className="spotify-link" href={artist.external_urls.spotify} target="_blank">
          <h4>{artist.name}</h4>
        </a>)
      })}
    </article>

  )

}

export default Album