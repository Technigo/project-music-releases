import React from 'react';
import { Artist } from 'components/Artist';
import './Album.css';
import { Icons } from 'components/Icons';

export const Album = (props) => {
  console.log(props.artists)
  return (
    <section className="albumcontainer">
      <div className="cover-and-icons">
        <a href={props.albumurl}>
          <img className="album-img" src={props.image} alt="Album Cover" />
          <div className="icons">
          <Icons />
          </div>
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
    </section>
  );
}; 