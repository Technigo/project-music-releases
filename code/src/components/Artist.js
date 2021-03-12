import React from 'react'

const Artist = (prop) => {

    return (
        <a href={prop.hrefArtist} target="_blank">
            <h3 className="artist-name">{prop.artist}</h3>
        </a>
    )
}

export default Artist;

