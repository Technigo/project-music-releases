import React from 'react'
import data from './data.json'
import { Album } from "./Album"

console.log(data)
console.log(data.albums.items[0].name)


export const App = () => {
  return (
    <div>
      <Album />
      <h1> Test Info</h1>
       {data.albums.items[0].name}
      {data.albums.items[0].artists[0].name}
      <img src={data.albums.items[0].images[0].url} alt="" width="500" height="600"></img>
    </div>
  )
}
