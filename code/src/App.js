import React from 'react';
import { Albumimg } from 'components/Albumimg';
import { Artistname } from 'components/Artistname';
import { Header } from 'components/Header';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div>
      <Header />
      <div> <Albumimg title="album img" /></div>
      <h3> <Albumname title="album tile" /> </h3>
      <h4> <Artistname name="artist name" /> </h4>
    </div>
  );
}
