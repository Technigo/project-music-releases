import React from 'react'
import data from './data.json'
import {Album} from './components/Album'
import {Artists} from './components/Artists'

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
  return (
  <Album 
  key = {item.name} 
  image = {item.images[0].url} 
  albumName = {item.name} 
  albumLink = {item.external_urls.spotify}
  artist = {item.artists.map(artist => MapArtists(artist))}
  />)
}

const MapArtists = (artist) => {
  return (
    < Artists 
      key = {artist.name} 
      name = {artist.name} 
      url = {artist.external_urls.spotify} 
    />
  )
}