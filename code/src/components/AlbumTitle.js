import React from 'react'

const AlbumTitle = ({ hrefAlbum, title }) => {
    return (
        <a href={hrefAlbum} target="_blank" rel="noopener noreferrer">
            <h2 className="album-title">{title}</h2>
        </a>
    )
}

export default AlbumTitle