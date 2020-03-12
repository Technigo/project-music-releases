import React from 'react'
import { Artist } from './Artists'
import { HoverIcons } from 'Hovericons'


// This compontent will fetch all data related to the Album including Album name and album image.
export const Album = (props) => {
  return (
    <article className='album-card'>
      <div className="Img-wrapper">
        <HoverIcons />
        <img src={props.item.images[1].url} alt='album cover' />
      </div>
      <div className="text-wrapper">
        <a className='album-name' href={props.item.external_urls.spotify}>{props.item.name}</a>
        <div>
          {props.item.artists.map(artist => {
            return (<Artist key={artist.id} artist={artist} />)
          })}
        </div>
      </div>
    </article>
  )
}