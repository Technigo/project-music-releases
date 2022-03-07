import React from 'react'
import data from './data.json'

console.log(data)
const MovieData= () => {
  const AlbumName= data.albums.items.map(album => {
    return (<div className="display">
      <img src={album.images[0].url}></img>
      <p> {
   album.name
   } </p>
      <p> {album.href} </p>
      <p> {album.album_type} </p>
      </div> )
  })
  return AlbumName
}

export const App = () => {
  return (
    <div className='displayAlbum'>
    <MovieData/>
      Find me in src/app.js!
    </div>
  )
}
