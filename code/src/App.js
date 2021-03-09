import React from 'react'
import data from './data.json'
import AlbumCover from './Components/AlbumCover.js'
import AlbumTitle from './Components/AlbumTitle.js'
import ArtistName from './Components/ArtistName.js'

console.log(data)

const AlbumArray = data.albums.items;

export const App = () => {
  return (
    <div>
      {AlbumArray.map((album) => {
        return <AlbumCover imgsrc={album.images[0].url}/>
        return <AlbumTitle {album.name}/>
      })}
    </div>
  )
}
