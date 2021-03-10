import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
    return (
        <div className="album-card">
            <img className="album-cover-image" src={props.images[0].url} alt="Album cover" /> 
            <p className="album-name">{props.albumName}</p>
            <p>{props.artists.map((artist) => {
                return (
                <Artist 
                key={artist.id}
                url={artist.external_urls.spotify}
                name={artist.name}
                />
                )
            })   
            }
            </p>
        </div>

    )

}

