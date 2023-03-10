import React from 'react';
import { AlbumList } from './components/AlbumList/AlbumList';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <section className="app">
      <header>
        <h1 className="bigTitle"> New albums and singles </h1>
      </header>
      <AlbumList data={data} />
    </section>
  );
}