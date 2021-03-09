import React from 'react'
import data from './data.json'
import Artist from "./components/Artist"



export const App = () => {
  return (
    <div>
      <img src={data.albums.items[0].images[1].url} alt="album"/>
      <div>{data.albums.items[0].name}</div>
      <div>{data.albums.items[0].artists[0].name}</div>
    </div>
  )
}

Artist()