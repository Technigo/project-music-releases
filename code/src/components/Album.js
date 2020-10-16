import React from 'react'
import './Album.css'

export const Album = (props) => { 
 
    return (
        <article className="album-card">
          <section className="cover-wrapper">

            <a className="album-cover-container "href={props.albumLink} target="_blank" rel="noopener noreferrer">

              <img src= {props.image} className="album-cover" alt={props.albumTitle}/>

              <section className="icons">
                <img className="heart" src="icons/heartwhite2.svg" alt="Heart icon"/>
                <img className="play" src="icons/playwhite2.svg" alt="Play icon"/>
                <img className="dots" src="icons/dotswhite2.svg" alt="Dots icon"/>
              </section>

            </a>

            <a href={props.albumLink} target="_blank" rel="noopener noreferrer">
              <h2>{props.albumTitle}</h2>
            </a>

            <div>
              {props.artists.map((artist) => {
                return (
                <a
                  key={artist.id}
                  className="artists-names"
                  href={artist.external_urls.spotify} 
                  target="_blank"
                  rel="noopener noreferrer">
                  {artist.name} 
                </a>
                )  
                })}
            </div> 

          </section>
        </article>
    )
}


