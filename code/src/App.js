import React from 'react'
import data from './data.json'

import Header from './Components/Header'
import AlbumList from './Components/AlbumList';


console.log(data)


export const App = () => {
  return (
    <>
      <Header />
      <AlbumList />

    </>
  )
}


