import React from 'react'
import data from './data.json'
import { AlbumsContainer } from './AlbumsContainer'

console.log(data.albums.items)

export const App = () => {
  return (
    < div >
      <AlbumsContainer albums={data.albums.items} />
    </div >
  )
}
