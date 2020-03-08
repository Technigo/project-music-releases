import React from 'react';
import data from './data.json';
import { Album } from './Components/Album';

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map(song => {
        return <Album key={song.id} albumCover={song.images[1].url} albumTitle={song.name} artist={song.artists[0].name}/>
      })}
    </div>
  )
}
