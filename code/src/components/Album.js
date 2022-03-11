import React from 'react'

import { Icons } from './Icons'

import Artist from './Artist'

// Named export
const Album = (props) => {
    return (
    <article className="card">
       
        <div className="linked-album">

        <a href={props.albumLink}>
            
            <img className="hover-album" src={props.img} alt={props.albumName} />
                <div className="icons-container">
                    <Icons />
                </div>
        </a>
        </div>
        
        <h2 className="album-name">{props.albumName}</h2>

         {<div className="artistContainer">
            {props.artists.map((artist) => (
     
           <Artist 
                artistName={artist.name}
                artistLink={artist.external_urls.spotify}  
            />
            )
         )}
            </div>}
    </article>
    )
}

export default Album
