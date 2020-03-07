import React from 'react'
import data from './data.json'
import { Album } from './components/Album'

console.log(data)
console.log(data.albums.items[0].name)
console.log(data.albums.items[0].artists[0].name)
console.log(data.albums.items[0].images[1])
console.log(data.albums.items[0].external_urls.spotify)

export const App = () => {
  return (
    <div className="cardContainer">

      {data.albums.items.map( (album) => {
      return (
      <Album AlbumImg={album.images[1]} AlbumUrl={album.external_urls.spotify} AlbumName={album.name} AlbumArtistUrl={album.artists[0].external_urls.spotify} AlbumArtist={album.artists[0].name} />
      )
    })}

    </div>
  )
}
