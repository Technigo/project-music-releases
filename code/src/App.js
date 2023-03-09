import React from 'react';
import data from './data.json';
import { Album } from './components/Album.js';
import { Header } from './components/Header'

console.log(data);

export const App = () => {
  return (
    <div className="release-container">
      <Header />
      <Album spotifyData={data} />
    </div>
  );
}
