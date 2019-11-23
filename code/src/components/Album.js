import React from 'react'
import { Dots } from './public/icons/Dots'
import { Heart } from './public/icons/Heart'
import { Play } from './public/icons/Play'
import './Album.css'

export const Album = (props) => (
    <div className="albumContainer">
        <Play />
        <img className="albumImg" src={props.image} alt='Album Cover' />
        <div className="moreDetails">
            <h1 className="albumTitle">{props.albumTitle}</h1>
            <h3 className="artistName">{props.artistName}</h3>
        </div>
    </div>
)