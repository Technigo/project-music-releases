import React from 'react'


const Artist = (props) => {

    return(
        <>
            {
            props.artists.map(artist => {
                return(
                    <a key={artist.id} className="artist-name" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                      {artist.name}
                    </a>
                    )
                })
            }
        </>
    )
}

export default Artist
