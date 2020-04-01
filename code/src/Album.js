import React from 'react'
import { Artist } from './Artist'
import './album.css'
import { Icons } from './Icons'

export const Album = (props) => {
  return (
    <article className='album-card'>
      <div className='album-cover'>
        <img src={props.item.images[1].url} alt={props.item.name} />
        <Icons />
      </div>
      <a className='album-name' href={props.item.external_urls.spotify}>{props.item.name}</a>
      <div>
        {props.item.artists.map(artist => {
          return (<Artist key={artist.id} artist={artist} />)
        })}
      </div>
    </article>
  )
}