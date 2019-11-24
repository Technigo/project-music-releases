import React from 'react'
// import { Dots } from './public/icons/Dots'
// import { Heart } from './public/icons/Heart'
// import { Play } from './public/icons/Play'
import './Album.css'

export const Album = (props) => (
    <div className="albumContainer">
        <div className="albumCover" style={{ backgroundImage: `url(${props.image})` }}>>
        {/* <img className="albumImg" src={props.image} alt='Album Cover' /> */}
        </div>
        <div className="moreDetails">
            <a className="linkAlbumTitle" href={props.urlAlbumTitle}><h1 className="albumTitle">{props.albumTitle}</h1></a>
            <a className="linkArtistName" href={props.urlArtistName}><h3 className="artistName">{props.artistName}</h3></a>
        </div>
    </div>
)

