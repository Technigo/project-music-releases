import React from 'react'
import data from './data.json'
import { Album } from "./Components/Album"
import {AlbumCover} from "./Components/AlbumCover"

console.log(data)

export const App = () => {
  return (
  <div className="flex">
    {data.albums.items.map(album => (
      <div key={album.id}>
      <AlbumCover
      image={album.images[1].url}
      />
      <Album
      name={album.name}
      />
      </div>
    ))}
  </div>
  )
}

