import React from 'react'
import data from '.././data.json'
import Artists from './Artists'

const AlbumCard = () => {
const albumArray = data.albums.items;
    return (
    <div>
    {albumArray.map(album => {
        return (
        <div> 
            <Artists />
            <p>Title: {album.name}</p>
            <p>Link: {album.external_urls.spotify}</p>
        </div>
        )
    })}
    </div>
    )
}

export default AlbumCard