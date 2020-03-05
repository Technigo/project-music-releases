import React from 'react'
import data from './data.json'

console.log(data.albums.items[0].name) // titel
console.log(data.albums.items[0].artists[0].name) // artistnamn
console.log(data.albums.items[0].images[1].url) // picture

console.log(data.albums.items[0,1, 2, 3, 4].name)


const Album = () => {
  return (
    <div>
    {}
    </div>
  )
}


export const App = () => {
  return (
    <div>
      
      Find me in src/app.js!
    </div>
  )
}
