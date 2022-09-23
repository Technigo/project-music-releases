import React from 'react';
import data from './data.json';

import './index.css';

import { Header } from './components/Header';
import { AlbumCard } from './components/AlbumCard';

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        {data.albums.items.map((item) => {
          return (
            <AlbumCard
              key={item.id}
              title={item.name}
              img={item.images[1].url}
              artist={item.artists}
              albumUrl={item.external_urls.spotify}
            />
          );
        })}
      </div>
    </>
  );
};
