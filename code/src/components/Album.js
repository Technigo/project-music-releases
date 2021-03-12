import React from 'react'

import Artist from './Artist'
import Icons from './Icons'
import AlbumTitle from './AlbumTitle'
import AlbumImage from './AlbumImage'



const Album = (prop) => {
   
    return (
        <div className="album-card">
            <div className="album-controls">
                <Icons/>
                <AlbumImage image={prop.image} key={prop.id}/>
            </div>
            <AlbumTitle title={prop.title} hrefAlbum={prop.hrefAlbum}/>
            <Artist artist={prop.artist} hrefArtist={prop.hrefArtist}/>
        </div>     
    )
}

export default Album