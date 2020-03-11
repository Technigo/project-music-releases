import React from 'react';
import data from './data.json';
import { AlbumsContainer } from './components/albumscontainer';

console.log(data)

export const App = () => {
  return (
    <div className="App">
      <h1>New albums & singles</h1>
      <AlbumsContainer albums={data.albums.items} />
    </div>
  );
};
