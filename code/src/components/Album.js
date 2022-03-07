import React from 'react'

import Artist from './Artist'

// Named export
const Album = (props) => {
    return (
    <article className="Album">
        <img src={props.img} />
        <h2>{props.albumName}</h2>
        <a>{props.albumLink}</a>

        {/* <div className="artists">
            {props.artists.map((artist) => (

        <Artist  
                artistName={artist.name}
                artistLink={artist.external_urls.spotify}
        />
        ))}
        </div> */}
    </article>
    )
}

export default Album