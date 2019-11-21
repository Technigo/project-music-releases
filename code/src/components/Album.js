import React from 'react'
import './album.css'
// import { Artist } from './Artist'

//getting prefix data.albums.items in App.js 
//Comp Album continues at .album using props
//Redo arstistname with map

export const Album = (props) => {
  console.log(props)
  return (
    <div className="albumCards">
      <div className="coverWrapper">
        <img src={props.item.images[1].url} alt="album cover" className="albumCover" />
        <div className="albumIcons">
          <img src="/icons/heart.svg" alt="heart" className="iconHeart" />
          <img src="/icons/play.svg" alt="play" className="iconPlay" />
          <img src="/icons/dots.svg" alt="dots" className="iconDots" />
        </div>
      </div>
      <div><a className="albumTitle" href={props.item.external_urls.spotify}>{props.item.name}</a></div>
      <div><a className="artistTitle" href={props.item.artists[0].external_urls.spotify}>{props.item.artists[0].name}</a></div>
    </div>
  )
}