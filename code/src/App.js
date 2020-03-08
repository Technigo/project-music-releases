import React from 'react'
import data from './data.json'
import { Album } from './components/Album'
import { Header } from './components/Header'

console.log(data)

export const App = () => {
  return (
    <div>
      <Header />

      <div className="cardContainer">

        {data.albums.items.map( (album) => {
        return (
        <Album key={album.name} AlbumImg={album.images[1]} AlbumUrl={album.external_urls.spotify} AlbumName={album.name} AlbumArtistUrl={album.artists[0].external_urls.spotify} AlbumArtist={album.artists[0].name} />
        )
      })}

      </div>
    </div>
  )
}
