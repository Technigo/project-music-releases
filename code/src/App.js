import React from 'react';
import { AlbumList } from './components/AlbumList';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <section>
      <header>
        <h1> New albums and singles </h1>
      </header>
      <div className="AlbumBox">
        <AlbumList data={data} />
      </div>
    </section>
  );
}