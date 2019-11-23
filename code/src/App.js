import React from 'react'
import data from './data.json'
import { Album } from './components/Album'
import './App.css'

console.log(data)

export const App = () => {
  return (
    <div className="albumComponent">
      {data.albums.items.map((item) => (
        <Album
          key={item.id}
          name={item.name}
          image={item.images[1].url}
          artists={item.artists[0].name} />
      ))}
    </div>
  )
}
