import React from 'react'
import playlist from './playlist.json'
import data from './data.json'
import {Album} from './components/Album'
import {Artists} from './components/Artists'
import {Sidebar} from './components/Sidebar'
console.log(playlist)
console.log(data)

export const App = () => {
  return (
    <>
    <h1 className="header">New albums &amp; singles</h1>

    <div className='main'>
      <div className='sidebar'>
        <h3 className='playlist'>Playlists</h3> 
          {playlist.playlists.items.map(item => MapLists(item))} 
        </div>
      <div className="container">
        {data.albums.items.map(MapAlbum)}
      </div>
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

const MapLists = (list) => {
  return (
    < Sidebar
      key = {list.id}
      list = {list.name}
      link = {list.external_urls.spotify}
    />  
  )
}