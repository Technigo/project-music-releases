import React from 'react'
import data from './data.json'
import { Header } from './Header'
import { AlbumList } from './AlbumList'


console.log(data)

export const App = () => {
  return (<div>
      <Header/>
      <AlbumList/>
    </div>
    )};
