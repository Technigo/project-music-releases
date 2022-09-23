import React from 'react'

const ArtistName = ({ hrefArtist, artist }) => {

    return (
        <a href={hrefArtist} aria-label="Go to artist" target="_blank">
            <h3 className="artist-name">{artist}</h3>
        </a>
    )
}

export default ArtistName;