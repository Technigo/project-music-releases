/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumCard } from 'components/AlbumCard'; // Ask Daniel on thursday why this has to be above the Header
import { Header } from './components/Header';

import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <div className="App">
        {data.albums.items.map((singleAlbum) => (
          <AlbumCard key={singleAlbum.id} album={singleAlbum} />
        ))};
      </div>
    </main>
  );
}

// data.map((album) => (<div><AlbumCard name={album.albums.items.name} /></div>))}