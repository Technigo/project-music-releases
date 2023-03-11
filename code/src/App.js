import React from 'react';
import data from './data.json';
import { Header } from './components/Header/Header.js';
import { Album } from './components/Album.js'

import './index.css';

console.log(data);

export const App = () => {
  return (
    <div>
      <h1>Tjoho</h1>
      <Header />
      <Album mapdata={data} />
    </div>
  );
}
