import React from 'react'

import Artist from './Artist'

// Named export
const Album = (props) => {
    return (
    <article className="Album">
        <h2>{props.albumName}</h2>
        <a href={props.albumLink}>
            <img src={props.img} alt={props.albumName} />
        </a>

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