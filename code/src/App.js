import React from 'react';
import data from './data.json';
import AlbumCard from './components/AlbumCard';
import Header from './components/Header';

console.log(data);

export const App = () => {
  return (
    <>
      <header><Header /></header>
      <div className="App">
        {data.albums.items.map((album) => (
          <AlbumCard
            key={album.id}
            name={album.name}
            img={album.images[1].url}
            artists={album.artists} />
        ))};
      </div>
    </>
  );
};

// @TODO add Header? "New albums & singles"