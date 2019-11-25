import React from 'react'
import { Album } from './Album'
import data from './data.json'
import './App.css'


console.log(data.albums.items)


export const App = () => {
  return ( 
    <div className="list">
      {data.albums.items.map((item) => {
      return <Album key={item.id} 
      name={item.name} 
      image={item.images[1].url} 
      link={item.href}
      artists={item.artists}/> 
      })}

    </div>
  )
}