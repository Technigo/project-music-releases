import React from 'react';
import { Artist } from 'components/Artist';
import './Album.css';
import { Icons } from 'components/Icons';

export const Album = (props) => {
  console.log(props.artists)
  return (
    <article className="albumcontainer">
      <div className="imgcontainer">
        <a href={props.albumurl}>
          <img className="album-img" src={props.image} alt="Album Cover" />
          <Icons />
        </a>
      </div>
      <a href={props.albumurl}>
        <div className="albumname">{props.albumname}</div>
      </a>
      <div className="artistcontainer">
        {props.artists.map((artist) => {
          return (
            <Artist artist={artist} />
          )
        })}
      </div>
    </article>
  )
}