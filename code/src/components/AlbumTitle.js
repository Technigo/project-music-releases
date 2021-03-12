import React from 'react'

const AlbumTitle = (prop) => {
    return (
        <a href={prop.hrefAlbum} target="_blank">
            <h2 className="album-title">{prop.title}</h2>
        </a>
    )
}

export default AlbumTitle