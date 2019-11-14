import React from 'react'
import data from './data.json'
import { Album } from './Album';
import { AlbumHover } from './AlbumHover';

console.log(data)

export const App = () => {  
  return (
    <div className="app">
      <h1>New albums and singles</h1>
    <div class="appContent">
      {data.albums.items.map(album => {
        return (
        <Album key={album.id} album={album} />

        );
      })}
    </div>
    </div>
  )
}
