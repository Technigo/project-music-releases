import React from 'react';
import data from './data.json';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import './index.css';

import { Header } from './Header';
=======
>>>>>>> parent of 2e5a36f (start)
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e

import Header from './components/Header';
import { AlbumCard } from './components/AlbumCard';

export const App = () => {
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  return <Header />;
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e
};
=======
  return (
    <div>
      Find me in src/app.js!
    </div>
  );
}
>>>>>>> parent of 2e5a36f (start)
