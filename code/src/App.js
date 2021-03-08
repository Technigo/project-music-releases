import React from 'react'
import data from './data.json'

import Header from './Components/Header'
// import AlbumCover from './Components/AlbumCover'
// import AlbumTitle from './Components/AlbumTitle'
import AlbumList from './Components/AlbumList';


console.log(data)

export const App = () => {
  return (
    <>
    <Header />
    <AlbumList />
    <div>
      Find me in src/app.js!
    </div>
    </>
  )
}

