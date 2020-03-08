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
        return <Album key={album.name} image={album.image} linkAlbum= {album.linkAlbum} name={album.name} 
        artist1={album.artist1} link1={album.link1} artist2={album.artist2} link2={album.link2} 
        artist3={album.artist3} link3={album.link3} />
      })}

    </div>
  )
}


