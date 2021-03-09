import React from 'react'
import data from './data.json'
import {Album} from './Album'
let i=0;

console.log(data)

export const App = () => {
  return (
    <>
    <h1 className="header">New albums &amp; singles</h1>
    <div className="container">
      {data.albums.items.map(MapAlbum)}
    </div>
    </>
  )
}

const MapAlbum = (item) => {
  i++
  if(i<9){
  return <Album 
  key = {item.name} 
  image = {item.images[0].url} 
  albumName = {item.name} 
  artist = {item.artists[0].name}
  albumLink = {item.external_urls.spotify}
  artistLink = {item.artists[0].external_urls.spotify}
  />
  }
}
