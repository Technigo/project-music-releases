import React from 'react'
import data from './data.json'
import { Album } from './Album'

console.log(data)

export const App = () => {
  return (
    <div className="body-container">
      <div className="album-container">
        {data.albums.items.map((album) => {
          return (
            <Album 
            key={album.id} 
            imageSrc={album.images[1].url} 
            albumName={album.name}
            artists={album.artists}
            />
          )
        })}
      </div>
    </div>
  )
}
