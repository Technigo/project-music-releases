import React from 'react';
import data from './data.json';
import { Header } from './components/Header/Header';
import { Album } from './components/Album';

console.log(data);

export const App = () => {
  return (
    <div>
      <Header />
      <Album mapdata={data} />
    </div>
  );
}
