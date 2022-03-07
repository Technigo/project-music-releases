import React from 'react';

import data from './data.json';
import Album from "./components/Album";

console.log(data)

export const App = () => {
  return (
    <div>
      <Album key="id" data={data.albums.items.map((album => album))} />
    </div>
  )
}

//data.albums.items
//data.albums.items.image === Cover Images
//data.albums.items.artists === for all artist information
