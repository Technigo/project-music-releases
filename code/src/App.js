import React from 'react'
import data from './data.json'
import {
  Headline
} from './components/Headline'
import {
  Album
} from './components/Album'
import {
  Artist
} from './components/Artist'

// Creating const albums and adding the value of all the album information
const albums = data.albums.items;
console.log(albums)

const artistArray = albums.map(album => album.artists)
console.log(artistArray)

const artistNames = artistArray.map(artist => artist.map((item) => item.name))
console.log(artistNames)

const artistLink = artistArray.map(artist => artist.map((item) => item.external_urls.spotify))
console.log(artistLink)

export const App = () => {
  return ( 
    <>
    <Headline />
    <div className = "main"> {
      albums.map((album) => { //.map to loop through albums and extract the correct values from the array
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