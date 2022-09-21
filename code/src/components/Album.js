import React from 'react'

import ArtistName from './ArtistName'
import AlbumName from './AlbumName'
import AlbumImage from './AlbumImage'

const Album = ({ title, hrefAlbum, artist, hrefArtist, image }) => {
   
    return (
      <div className="album-info">
        <div className="album-image">
            <AlbumImage image={image}/>
        </div>
            <AlbumName title={title} hrefAlbum={hrefAlbum}/>
            <ArtistName artist={artist} hrefArtist={hrefArtist}/>  
        </div>
    )
}

export default Album