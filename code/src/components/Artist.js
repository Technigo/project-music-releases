import React from 'react'
import './artist.css'

//Mapping data.albums.items in App.js
//Comp Artist continues at .item.xxx using props (item could be changed to anything, as long as I give same name in key=item.id in Album.js)

export const Artist = (props) => {
  // console.log(props)
  return (
    <a className="artistTitle" href={props.item.external_urls.spotify}>{props.item.name}</a>
  )
}