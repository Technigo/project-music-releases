import React from 'react'
import data from './data.json'
import { Album } from './components/Album'
import './App.css'

console.log(data)

export const App = () => {
  return (
    <div className="albumComponent">
      {data.albums.items.map((item) => (
        <Album
          key={item.id}
          albumTitle={item.name}
          urlArtistName={item.artists[0].external_urls.spotify}
          image={item.images[1].url}
          artistName={item.artists[0].name}
          urlAlbumTitle={item.external_urls.spotify} />
      ))}
    </div>
  )
}