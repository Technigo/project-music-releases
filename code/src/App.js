import React from 'react';
import data from './data.json';
import { MusicList } from './MusicList';

console.log(data)

export const App = () => {
  return (
    <main>
      <header>
        <h1>New albums & singles</h1>
      </header>
      {/* Below accessing the items array that's inside the album object and sending it as the prop albums to Musiclist */}
      <MusicList item_array={data.albums.items} /> 
    </main>
  );
};