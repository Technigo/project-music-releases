import React from 'react'

import Artist from './Artist'
import Icons from './Icons'
import AlbumTitle from './AlbumTitle'
import AlbumImage from './Album-image'




const Album = (prop) => {
    
    return (
        <div className="albumCard">
            <Icons/>
            <AlbumImage image={prop.image}/>

            <AlbumTitle title={prop.title} hrefAlbum={prop.hrefAlbum}/>

            <Artist artist={prop.artist} hrefArtist={prop.hrefArtist}/>
            {/* ADDED ARTIST COMPONENT*/}
            {/* <a className="artistName">{prop.artist}</a>  */}



            
            
             
            
        </div>     
    )
}

export default Album