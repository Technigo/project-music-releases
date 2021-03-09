import React from 'react'
import data from './data.json'


const AlbumName = () => {
    const albumArray = data.albums.items
    const albumName = albumArray.map(album => {
        return album.name
    }) 

    return (
        albumName
    )
}

export default AlbumName