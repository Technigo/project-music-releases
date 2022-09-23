import React from 'react'

const AlbumName = ({ hrefAlbum, title }) => {
    return (
        <a href={hrefAlbum} aria-label="Go to album" target="_blank">
            <h2 className="album-name">{title}</h2>
        </a>
    )
}

export default AlbumName
