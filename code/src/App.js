import React from 'react'
import data from './data.json'
import { Album } from './Album'

console.log(data)

export const App = () => (
  <div className="App-container">
    <h1>New Albums and Releases</h1>
    <div className="Every-album">
      <Album />
    </div>
  </div>

);

