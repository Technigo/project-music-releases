import React from 'react';
import data from './data.json';
import AlbumCard from './components/AlbumCard';

console.log(data);

export const App = () => {
  return (
    <div className="App">
      {data.albums.items.map((album) => (

        <AlbumCard
          key={album.id}
          name={album.name}
          img={album.images[1].url}
          artists={album.artists} />

      ))};
    </div>
  );
};

// @TODO add Header? "New albums & singles"