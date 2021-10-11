import React from 'react'
import data from '../data.json'
import { Artist } from './Artist'

export const Album = props => {
    return (
        <div>
            <h1>ALBUM {props.name}</h1>
            <div>
                {data.albums.items.map(artist => {
                    return (
                        <Artist key={artist.name} name={artist.name} />
                    )
                })}
            </div>
        </div>

    )
}
