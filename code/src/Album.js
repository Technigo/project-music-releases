import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
    return (
        <div className="album">
            <img src={props.imageSrc} alt={props.albumName}></img>
            <p>{props.albumName}</p>
            <Artist artists={props.artists}/>
        </div>
    )
}
