import React from 'react'
import data from './data.json'


import { AlbumsContainer } from './AlbumsContainer'
import 'app.css'

console.log(data)
console.log(data.albums.items[1].images[2].url)
console.log(data.albums.items[1].artists[0].external_urls)
console.log(data.albums.items[1].external_urls)

export const App = () => {
  return (
    <article className="BodyContainer">
      <h1 className='PageTitle'>New albums & singles</h1>
      <AlbumsContainer albums={data.albums.items} />
    </article>
  )
}
