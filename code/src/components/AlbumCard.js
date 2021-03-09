import React from 'react'
import data from '.././data.json';

const AlbumCard = () => {
const albumArray = data.albums.items;
    return (
    <div>
    {albumArray.map(album => {
        return (
        <div> 
            <p>Artist: {album.artists[0].name}</p>
            <p>Title: {album.name}</p>
            <p>Link: {album.external_urls.spotify}</p>
        </div>
        )
    })}
    </div>
    )
}

export default AlbumCard;