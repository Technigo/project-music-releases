import React from 'react';
import data from './data.json';
import { Album } from './components/Album/Album.js';
import { Artist } from './components/Artist/Artist';
import { Covers } from './components/Covers/Covers';

console.log(data);

export const App = () => {
  return (
    <div className="App">
      {data.albums.items.map((singleAlbumItem) => (
        <div key={singleAlbumItem.id}>
          <Album album={singleAlbumItem.name} />
          <Artist album={singleAlbumItem} />
          <Covers album={singleAlbumItem} />
        </div>
      ))}

    </div>
  );
};

// <Artist key= {artist.id} />