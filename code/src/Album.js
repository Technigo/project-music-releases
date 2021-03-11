import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
    return (
        <div className="album">
            <img src={props.imageSrc} alt={props.albumName}></img>
            <p className="album-title">{props.albumName}</p>
            {props.artists.map((artist, index) => {
                return (
                    <div className="artist-container">
                    <Artist
                    key={artist.id} 
                    artistUrl={artist.external_urls.spotify}
                    artistName={artist.name}
                    />
                    </div>
                )
            })}

        </div>
    )
}
