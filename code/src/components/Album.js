import React from 'react'
import { Artist } from './components/Artist' 

export const Album = (props) => {
    return (
        <article>
            <img src={props.img} alt='album cover'/>
            <a href={props.albumLink}><h2>{props.album}</h2></a>
            <Artist
            artistData={props.album} />
        </article>
    )
}