import React from 'react'
import data from './data.json'
import AlbumCard from './components/AlbumCard'
import Header from 'components/Header'

console.log(data.albums.items)
const albumsArray = data.albums.items

export const App = () => {
  return (
    <>
      <Header />
      <div className='albums-container'>
        <AlbumCard albumsArray = {albumsArray}/>
      </div>
     
    </>
  )
}
