import React from 'react'

const AlbumName = ({ hrefAlbum, title }) => {
    return (
        <a href={hrefAlbum} target="_blank">
            <h2 className="album-name">{title}</h2>
        </a>
    )
}

export default AlbumName
