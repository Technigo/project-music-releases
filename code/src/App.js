import React from 'react';
import Album from 'components/album';
import data from './data.json';

export const App = () => {
  return (
    <div className="App">
      <h>Artist List</h>
      {data.albums.items.map((albums) => (
        <Album
          title={albums.href} />
      ))}
    </div>
  );
}