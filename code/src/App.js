import React from 'react'
import data from './data.json'
import Album from './components/Album'

console.log(data)

export const App = () => {
  const albums = data.albums.items;

  return (
    <div>
      <h1>New albums & singles</h1>
      <div>
        {albums.map((album) => {
          return <Album album={album}/>;
        })}
      </div>
    </div>
  )
}