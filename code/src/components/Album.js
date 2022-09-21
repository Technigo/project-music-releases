import React from 'react'

import ArtistName from './ArtistName'
import AlbumName from './AlbumName'

const Album = ({ title, hrefAlbum, artist, hrefArtist }) => {
   
    return (
        <div className="album-card">

            <AlbumName title={title} hrefAlbum={hrefAlbum}/>
            <ArtistName artist={artist} hrefArtist={hrefArtist}/>
        </div>     
    )
}

export default Album