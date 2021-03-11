import React from 'react'
import data from './data.json'
import playlist from './stretch-goal.json'
import Header from 'components/Header'
import AlbumCard from './components/AlbumCard'

console.log(playlist.playlist)
const albumsArray = data.albums.items

export const App = () => {
  return (
    <>
      <Header />
      <div className='albums-container'>
        <AlbumCard albumsArray={albumsArray} />
      </div>
    </>
  )
}
