import React from 'react';
import { Artist } from './Artist.js'
import './Album.css'

export const Album = (props) => { 
  
    return (
        <article className="album-card">
          <section className="cover">
            <img src= {props.image} className="album-cover"/>
            <a href={props.albumLink} target="_blank">
              <h2>{props.albumTitle}</h2>
            </a>
            <div>
              {props.artists.map(artist => {
              return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify}/>
              })}
            </div>
          
            <section className="icons">
              <img className="heart" src="icons/heart.svg"/>
              <img className="play" src="icons/play.svg"/>
              <img className="dots" src="icons/dots.svg"/>
            </section>
          </section>
        </article>
    )
}

/* line 10 - iterate over artists array and returns the Artist component for every artist that is in the array.
Props in artist component connects with the values in the returning Artist tag. Artist.name is props.name in artist component. Key value must b a unique value.*/