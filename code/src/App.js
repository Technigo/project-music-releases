import React from 'react'
import data from './data.json'
import { Headline } from './components/Headline'
import { Album } from './components/Album'
import { Artist } from './components/Artist'

// album keeps the value of all the album data

const albums = data.albums.items;

//.map to loop through the albums and extract the correct values from the array

export const App = () => {
  return ( 
    <>
    <Headline />
    <div className = "main"> {
      albums.map((album) => { 
        return <Album
        key = {album.name}
        albumLink = {album.external_urls.spotify}
        cover = {album.images[1].url}
        title = {album.name}
        artistName = {album.artists.map((artist) => ( 
          <Artist
          key = {artist.name}
          artistName = {artist.name}
          artistLink = {artist.external_urls.spotify}
          />
      ))}
        />
      })
    } 
    </div>
    </>
  )
}