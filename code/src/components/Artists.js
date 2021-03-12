import React from 'react'

const Artist = (props) => {
    return(
        <div>
            {props.item.artists.map((artist) => {
            return (
                <a href={artist.external_urls.spotify} key={artist.id}>
                <h5 className="artist-name">
                    {artist.name}
                </h5>
                </a>
            )
            })}
        </div>
    )
}

export default Artist 