import React from 'react'

import Artist from './Artist'
import Icons from './Icons'
import AlbumTitle from './AlbumTitle'
import AlbumImage from './AlbumImage'



const Album = ({ image, id, title, hrefAlbum, artist, hrefArtist }) => {
   
    return (
        <div className="album-card">
            <div className="album-controls">
                <Icons/>
                <AlbumImage image={image} key={id}/>
            </div>
            <AlbumTitle title={title} hrefAlbum={hrefAlbum}/>
            <Artist artist={artist} hrefArtist={hrefArtist}/>
        </div>     
    )
}

export default Album