import React from 'react'
import data from './data.json'
import Album from './components/Album'

console.log(data)

export const App = () => {
  const albums = data.albums.items;

  return (
    <div className="container">
      <h1>New albums & singles</h1>
        <div className="release-container-all">
          {albums.map((album) => {
            return (
            <Album
            key={album.id}
            album={album}/>
            )
          })}
        </div>
      </div>
  )
}