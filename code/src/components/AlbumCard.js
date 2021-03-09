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
        <img src={album.images[1].url} />
        <div> 
            <Artists />
        </div>
        </div>
        )
    })}
    </div>
    )
}

export default AlbumCard