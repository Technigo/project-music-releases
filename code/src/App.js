import React from 'react'
import data from './data.json'
import { Header } from './components/Header'
import { AlbumList } from './components/AlbumList'


console.log(data)

export const App = () => {
  return (
    <div>
      <Header/>
      <AlbumList/>
    </div>
    )};
