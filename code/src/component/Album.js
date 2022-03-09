import React from 'react'

import { Artist } from './Artist'
import { Icons } from './Icons'

export const Album = (props) => {

    return (
        <article className="album-container">
            <img className="album-cover" src={props.item.images[0].url}></img>
            < Icons />
            <h1>{props.item.name}</h1>
              <div className="artist-info">
                {props.item.artists.map(item => {
                    return (
                       < Artist key={item.id} item={item} />
                    )
                })}
            </div>
        </article>
    )
}