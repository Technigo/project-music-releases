import React from 'react'

import { Artist } from './Artist'

export const Album = (props) => {

    return (
        <article className="Album-container">
            <img className="album-cover" src={props.item.images[0].url}></img>
            <h1>{props.item.name}</h1>
            <p>{props.item.release_date}</p>
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