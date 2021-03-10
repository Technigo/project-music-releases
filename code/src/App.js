import React from 'react'
import data from './data.json'
import Header from './components/Header'
import Album from './components/Album'

export const App = () => {
  const AlbumItems = data.albums.items

  return (
    <>
      <Header />
      <Album items={AlbumItems} />
    </>
  )
}
