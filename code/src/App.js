import React from 'react'
import data from './data.json'
import { Album } from './Spotify'
import { Person } from './Person'
import { albumNew } from './Music'

console.log(data)
console.log("music", albumNew)

export const App = () => {
  return (
    <div className="album-grid">

{albumNew.map((album) =>  {
        return <Album key={album.name} image={album.image} linkAlbum= {album.linkAlbum} name={album.name} artist={album.artist} />
      })}

    </div>
  )
}


