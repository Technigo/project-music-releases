import React from 'react'
import data from '../data.json'

console.log(data)


const ArtistArray = data.albums.items.map((item) => item.artists)

console.log(ArtistArray)

const Artist = ArtistArray.map((artist) => {
  console.log(artist)
  return (
      <p className="artist-name">{artist[0].name}</p>
  )
  })

  const ArtistArray = data.album.items.map((item) => {
    return item.map 
  })

export default Artist