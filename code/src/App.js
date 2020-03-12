import React from 'react'
import data from './data.json'

import { Button } from './button'
import { AlbumsContainer } from './AlbumsContainer'
import 'app.css'

console.log(data)
console.log(data.albums.items[1].images[2].url)
console.log(data.albums.items[1].artists[0].external_urls)
console.log(data.albums.items[1].external_urls)

export const App = () => {
  return (
    <>
      <h1 className='Title'>New albums & singles</h1>
      <AlbumsContainer  albums={data.albums.items} />
      <Button href={data.albums.href} albums={data.albums.items} />

    </>
  )
}
