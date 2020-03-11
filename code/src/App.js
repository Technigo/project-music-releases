import React from 'react'
import data from './data.json'
import './app.css'
import { AlbumsContainer } from './AlbumsContainer'

console.log(data.albums.items)

export const App = () => {
  return (
    < main >
      <h1>New albums and singles</h1>
      <hr />
      <AlbumsContainer albums={data.albums.items} />
    </main >
  )
}
