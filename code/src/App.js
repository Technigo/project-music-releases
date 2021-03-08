import React from 'react'
import data from './data.json'
import {Album} from './Album'

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
  return <Album image = {item.images[0].url} albumName = {item.name} artist = {item.artists[0].name}/>
}
