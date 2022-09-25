import React from 'react'
import ArtistName from './ArtistName'
import AlbumName from './AlbumName'
import AlbumImage from './AlbumImage'

const Album = ({ title, hrefAlbum, artist, hrefArtist, image }) => {
    
    return (
        <article className="album-card">
            <AlbumImage image={image} hrefAlbum={hrefAlbum}/>
            <AlbumName title={title} hrefAlbum={hrefAlbum}/>
            <ArtistName artist={artist} hrefArtist={hrefArtist}/>  
        </article>
    )
    
}

export default Album