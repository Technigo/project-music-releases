import React from 'react'
import { Artist } from 'Artist.js'
import { ReactComponent as Heart } from './icons/heart.svg'
import { ReactComponent as Play } from './icons/play.svg'
import { ReactComponent as Dots } from './icons/dots.svg'

export const Album = (props) => {
  return (
    <article className="album">
      < a href={props.link} target="_blank">
        <div className="coverImage">
          <img src={props.image} alt="cover"></img>
          <div className="overlay">
            <Heart className="heart" />
            <Play className="play" />
            <Dots className="dots" />
          </div>
        </div>
      </a>
      < a href={props.link} target="_blank">
        <h1>{props.name}</h1>
      </a>
      <ul className="artist">
        {props.artists.map(artist => {
          return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} />
        })}
      </ul>
    </article>
  )
}

