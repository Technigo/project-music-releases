import React from 'react'

const Album = (props) => {
    return (
        <div>
            {props.album.map((artist) => {
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

export default Album 