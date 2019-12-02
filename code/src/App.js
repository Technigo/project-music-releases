import React from 'react'
import data from './data.json'
import Albums from './Components/Albums.js'

export const App = () => {
  return (
    <section>
      <h2>New albums and singles</h2>
      <hr />
      <Albums albums={data.albums.items}/>
    </section>
  )
}