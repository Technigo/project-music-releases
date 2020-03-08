import React from 'react'
import data from './data.json'
import { Album } from './Album'

import './app_style.css'

// console.log(data.albums.items[0].name) // Song title
// console.log(data.albums.items[0].artists[0].name) // Artist name
// console.log(data.albums.items[0].images[1].url) // Picture
// console.log(data.albums.items[0,1, 2, 3, 4].name)

/*
const Album = () => {
  return (
    <div>
    {}
    </div>
  )
}
*/

export const App = () => {
  return (
    <div className="main-app-container">
      <div className="album-container">
      {data.albums.items.map((album) => {
        return ( <Album key={album.artists[0].name} name={album.artists[0].name} 
          title={album.name}
          image={album.images[1].url}/>
          )
      })}
      {/* Find me in src/app.js! */}
      </div>

    </div>
  )
}
