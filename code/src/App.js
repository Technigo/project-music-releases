import React from 'react'
import data from './data.json'
import { Dots } from './icons'
import { Button } from './button'
import { AlbumsContainer } from './AlbumsContainer'

console.log(data)
console.log(data.albums.items[1].images[2].url)

export const App = () => {
  return (
    <>
      <AlbumsContainer albums={data.albums.items} />
      <Button href={data.albums.href} albums={data.albums.items} />
      <Dots />
    </>
  )
}
