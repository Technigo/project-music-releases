import React from 'react'

import { Artist } from './Artist'
import { Icons } from './Icons'

import './Album.css'

export const Album = (props) => {

    return (
        <article className="album-container">
         <div className='album-wrap'>
            <img className="album-cover" src={props.item.images[0].url} alt='album-cover'></img>
            < Icons />
        </div>
            <a className='album-title' href={props.item.external_urls.spotify} target='_blank' alt='album title' rel="noopener noreferrer">{props.item.name}</a>
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