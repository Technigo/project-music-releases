import React from 'react';
// import data from './data.json';
// import Albumcover from './components/Albumcover/Albumcover';
import { Header } from './components/Header/Header';
// import { Album } from './components/Album/Album';
import { Artists } from './components/Artists/Artists';

export const App = () => {
  return (
    <section className="albumcontainer-parent">
      <Header />
      <Artists />
    </section>
  );
};
