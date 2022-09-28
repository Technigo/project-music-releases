import React from 'react';
import data from './data.json';
import Header from './components/Header';
import AlbumCard from './components/AlbumCard';

export const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        {data.albums.items.map((album) => (
          <AlbumCard
            key={album.id}
            name={album.name}
            img={album.images[1].url}
            artists={album.artists}
            url={album.external_urls.spotify} />
        ))};
      </div>
    </>
  );
};