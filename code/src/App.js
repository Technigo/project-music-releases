import React from 'react'
import data from './data.json'
import Album from "./components/Album"

console.log(data)

const albums = data.albums.items;
console.log(albums)

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      
      { albums.map((album) => {
        return <Album
        image={album.images[1].url}
        name={album.name}
        artists={album.artists[0].name}
        />
      }) }


    </div>
  )
}

