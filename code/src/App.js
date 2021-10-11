import React from 'react';
import data from './data.json';

import Header from './components/Header';
import { SongCard } from './components/SongCard';
import { SongTitle } from './components/SongTitle';
import { Artists } from './components/Artists';
import { CoverImages } from './components/CoverImages';

console.log(data);
// console.log(data.albums.items[0].images[1].url);

export const App = () => {
  return (
    <>
      <Header />
      <SongCard />
    </>
  );

  // {data.albums.items.map((item) => (
  //   <SongCard />
  // ))}

  //   <section>
  //   <SongCard />
  // </section>
};
