import React from 'react'
import data from '../data.json'
import { Album } from './Album'
import { Artist } from './Artist'

console.log(data)

export const App = () => {
  return (
    <div>
      <div>
        {data.albums.items.map(album => {
          return (
            <Album key={album.name} name={album.name} />
          )
        })}
      </div>
      <div>
        {data.albums.items.map(artist => {
          return (
            <Artist key={artist.name} name={artist.name} />
          )
        })}
      </div>
    </div>
  )
}



