import React from 'react'
import './album.css'
import { Artist } from './Artist'
import { Icons } from './Icons'

//Mapping data.albums.items in App.js 
//Comp Album continues at .item.xxx using props as prefix (item could be changed to anything, as long as I give same name in key=item.id in App.js)
//Mapping the artists array with comp Artist

export const Album = (props) => {
  // console.log(props)
  return (
    <div className="album-cards">
      <div className="cover-wrapper">
        <img src={props.item.images[1].url} alt="album cover" className="album-cover" />
        <Icons />
      </div>
      <div><a className="album-title" href={props.item.external_urls.spotify}>{props.item.name}</a></div>

      <div className="artist">
        {props.item.artists.map(item => {
          return (
            <Artist key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}