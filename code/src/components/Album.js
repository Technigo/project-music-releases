import React from 'react';
import { Artist } from 'components/Artist.js'

/*console.log(data.albums.items[0].artists[0].name) */

export const Album = (props) => { 
    return (
        <article className="album">
          <img src= {props.image} className="album-cover"/>
          <h2>{props.albumTitle}</h2>
          <section className="icons">
            <img className="heart" src="icons/heart.svg"/>
            <img className="play" src="icons/play.svg"/>
            <img className="dots" src="icons/dots.svg"/>
          </section>
        </article>
    )
}

        