import React from 'react'
import data from './data.json'
import { Album } from './components/Album'


console.log('data:', data)
console.log('album-cover', data.albums.items[0].images[1].url)
console.log('album-name', data.albums.items[0].name)
console.log('album-link', data.albums.items[0].external_urls.spotify)
console.log('artist-name', data.albums.items[0].artists[0].name)


export const App = () => {

  const albums = data.albums.items.map(album => {
    return (
      <Album 
        img={album.images[1].url}
        album={album.name}
        albumLink={album.external_urls.spotify}
        // artistName={album.artists[0].name}
        artistArray={album}
        />
    )
  })

  return (
    <div>
      <h1>New albums &amp; singles</h1>
      {albums}
    </div>
    )
  }
