import React from 'react';
import data from './data.json';
import Album from './components/Album.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import './index.css';

const albumsArray = data.albums.items

console.log(data);

export const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Album albumsArray={albumsArray} />
      <Footer />
    </div>
  )
}
