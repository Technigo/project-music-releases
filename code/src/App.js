import React from 'react'
import data from './data.json'
import Header from 'components/Header'
import AlbumCard from './components/AlbumCard'

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
