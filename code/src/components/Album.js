import React from 'react';
import { Artist } from './Artist';
import dots from '../icons/dots.svg'
import heart from '../icons/heart.svg'
import play from '../icons/play.svg'

export const Album = (props) => {
  return (

    <div className="album-child">

      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="cover-container">
          <img src={props.image} alt="cover" className="cover-image" />

          <div className="overlay">
            <img src={heart} alt="heart" className="icon-heart" />
            <img src={play} alt="play" className="icon-play" />
            <img src={dots} alt="dots" className="icon-dots" />
          </div>
        </div>
      </a>

      <div className="album-name">
        <a href={props.link} target="_blank" rel="noreferrer">
          <h2>{props.name}</h2>
        </a>
      </div>

      <div className="artist-name">
        {props.artists.map((artist) => {
          return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} />
        })}
      </div>

    </div>

  )
};