import React from 'react'

import ArtistName from './ArtistName'
import AlbumName from './AlbumName'
import AlbumImage from './AlbumImage'

const Album = ({ title, hrefAlbum, artist, hrefArtist, image }) => {
   

    return (
        <article className="album-card">
            <div className="overlay">
                <div className="icons-container">
                    <img className="icons" id="heart" src="./icons/heart.svg" alt="heart"/>
                    <img className="icons" id="play" src="./icons/play.svg" alt="play"/>
                    <img className="icons" id="dots" src="./icons/dots.svg" alt="dots"/>
                </div> 
                <AlbumImage image={image}/>
            </div>
            
            <AlbumName title={title} hrefAlbum={hrefAlbum}/>
            <ArtistName artist={artist} hrefArtist={hrefArtist}/>  
        </article>
    )
    
}

export default Album