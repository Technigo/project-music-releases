import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
    return (
        <div className="album">
            <img src={props.imageSrc} alt={props.albumName}></img>
            <p>{props.albumName}</p>
            {props.artists.map((artist, index) => {
                return (
                    <Artist
                    key={artist.id} 
                    artistUrl={artist.external_urls.spotify}
                    artistName={artist.name}
                    />
                )
            })}

        </div>
    )
}
