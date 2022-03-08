import React from 'react';

import data from './data.json';
import Album from "./components/Album";

console.log(data)

export const App = () => {
  return (
    <div>
      <h1>New albums & singles</h1>
      {data.albums.items.map((album =>
        <Album key={album.id} albums={album} />
      ))}
    </div>
  )
}



//data.albums.items
//data.albums.items.image === Cover Images
//data.albums.items.artists === for all artist information

