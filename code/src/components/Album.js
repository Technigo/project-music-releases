import React from 'react'

import { Icons } from './Icons'

import Artist from './Artist'

// Named export
const Album = (props) => {
    return (
    <article className="card">
       
        <div className="linked-album">

        <a href={props.albumLink} target="_blank" rel="noopener noreferrer">
            
            <img className="hover-album" src={props.img} alt={props.albumName} />
                <div className="icons-container">
                    <Icons />
                </div>
        </a>
        </div>


        <h2 className="album-name">{props.albumName}</h2>

         <div className="artistContainer">
            {props.artists.map((artist, index) => {

    return (
        <span className="artist">
    <Artist 
        key={artist.name}
        artistName={artist.name}
        artistLink={artist.external_urls.spotify}
           />

        <span className="symbol-color">
        { 
          props.artists.length > 2 && index >= 0 && index < props.artists.length -2
          ? ', '
          : index === props.artists.length -2
          ? ' & '
          : ''
        }
        </span>

        </span>
    )
     })}
        </div>
    </article>
    )
}

export default Album
