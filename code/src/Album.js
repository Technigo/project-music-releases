import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {

        return (
            <div className="album">
                <img src={props.imageSrc} alt={props.albumName}></img>
                <p className="album-title">{props.albumName}</p>
                <div className="artists">
                    <Artist key={props.id} artists={props.artists} />
                </div>
            </div>
        )
    
}
