import React from 'react';
import data from './data.json';
import { Album } from './components/Album';
import { Header } from './components/Header';

// albumdata becomms an array of all our albumobject
const albumData = data.albums.items;

export const App = () => {
  return (
    <div>
      <Header />
      <section className="main-container">
        {albumData.map((album) => (
          // First is connected to Album.js
          // Second album is an (in html attribute) and here we call it a props
          // Third album is our object from data.json(an js object)
          <Album album={album} />
        ))}
      </section>
    </div>)
};

