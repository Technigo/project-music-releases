import React from 'react';
import { Artist } from './Artist.js'
import './Album.css'

export const Album = (props) => { 
  /* create a new array with artist.name. use join.method to turn the array into a string and then seperate them with a "," */
  const artistArray = props.artists.map(artist => artist.name);
  const artistString = artistArray.join(", ");

    return (
        <article className="album-card">
          <section className="cover">
            <img src= {props.image} className="album-cover"/>
            <a href={props.albumLink} target="_blank">
              <h2>{props.albumTitle}</h2>
            </a>
            <a href={props.artistLink} target="_blank">
              <div>
                <Artist key={artistString} name={artistString}/>
              </div>
            </a>
            <section className="icons">
              <img className="heart" src="icons/heart.svg"/>
              <img className="play" src="icons/play.svg"/>
              <img className="dots" src="icons/dots.svg"/>
            </section>
          </section>
        </article>
    )
}

/* moved artistLink from artist.js to album js to get imported with album.js component in the App.js component. */