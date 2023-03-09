/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumList } from 'components/AlbumList';
import { Header } from './components/Header';

import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <section className="app">
      <Header />
      <main className="main-wrapper">
        <AlbumList data={data} />
      </main>
    </section>
  );
}