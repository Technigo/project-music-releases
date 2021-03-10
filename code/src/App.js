import React from 'react'
import data from './data.json'
import Album from './Components/Album.js'


console.log(data)

const AlbumArray = data.albums.items;

export const App = () => {
  return (
    <div>
      {AlbumArray.map((album) => {
        return <div className="album"> 
        <Album
          imgsrc={album.images[0].url}
          key={album.name}
          album={album.name}
        />
        </div>

      })}
    </div>
  )
}
