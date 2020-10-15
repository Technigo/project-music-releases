import React from 'react';
import data from './data.json';
import { Musiclist } from './Musiclist';

console.log(data)

export const App = () => {
  return (
    <main>
      <header>
        <h1>New albums & singles</h1>
      </header>
      {/* Below accessing all album information & sending it as the prop albums to Musiclist */}
      <Musiclist item_array={data.albums.items} /> 
    </main>
  );
};