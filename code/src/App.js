import React from 'react'
import { Album } from './Album'
import data from './data.json'

console.log(data.albums.items)


export const App = () => {
  return ( 
    <div>
      {data.albums.items.map((item) => {
      return <Album key={item.id} name={item.name} 
      image={item.images[1].url} 
      artists={item.artists}/> 
      })}

    </div>
  )
}