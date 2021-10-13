import React from 'react';
import data from './data.json';

import Header from './components/Header';
import { SongCard } from './components/SongCard';

//console.log(data);

export const App = () => {
  return (
    <>
      <header className='header'>
        <Header />
        <hr />
      </header>
      <section className='song-card-container'>
        {data.albums.items.map((release) => {
          return <SongCard key={release.id} item={release} />;
        })}
      </section>
    </>
  );
};
