import React from 'react'
import data from './data.json'

import Album from './Album'
import AlbumImage from './AlbumImage'


// //console.log(data.albums)

// // ALL ALBUM
const albumArray = data.albums.items

// // console.log(albumArray)

// // ALBUM ARTIST

// const albumArtist = albumArray.map(album => {
//   return album.artists[0].name
// })

// // console.log(albumArtist)

// // ALBUM NAME

// const albumName = albumArray.map(album => {
//   return album.name
// })

// //console.log(albumName)


//ALBUM IMAGE

const albumImageURL = albumArray.map(album => {
return album.images[0].url
})

console.log(albumImageURL)


// array.map(function(currentValue, index, arr), thisValue)
// array.map((currentValue) => thisValue)

// let allAlbums = data.albums.items.map(items => items)

// console.log(allAlbums)
// console.log(allAlbums.item[0].artist[0c])

// let artist = allAlbums.items.map(items => items.artists)

// console.log(artist)

export const App = () => {
  return (
    <div>
      <h1>New albums & singles</h1>
      <Album/>
    </div>
  )
}
