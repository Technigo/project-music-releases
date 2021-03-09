import React from 'react'
import data from './data.json'


const AlbumImage = () => {
    const albumArray = data.albums.items
    const albumImage = albumArray.map(album => {
        return album.images[0].url 
    }) 
    return (
        albumImage
    )
}
console.log(AlbumImage)
export default AlbumImage



