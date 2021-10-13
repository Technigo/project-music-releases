import React from 'react'

const Artist = (props) => {
    const artistName = props.artists.map(artist => {
        return artist.name
    }) 
    return (
        <div key={artistName.id} className="artist-name">
            <a href={artistName.external_urls} target="_blank" rel="noopener noreferrer">
                <p>{artistName}</p>
            </a>
        </div>
    )
}

export default Artist 