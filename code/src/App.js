import React from 'react'
import data from './data.json'
import { Album } from './Album'

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map((album) => {
        return (
          <Album 
          key={album.id} 
          imageSrc={album.images[1].url} 
          albumName={album.name}
          />
        )
      })}
    </div>
  )
}
