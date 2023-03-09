import React from 'react';
import data from './data.json';
import { Album } from './components/Album';
import { Header } from './components/Header';

// albumdata blir en array av alla albumobjekt istället för att skriva ut allt i items
const albumData = data.albums.items;

export const App = () => {
  return (
    <div>
      <Header />
      <section className="main-container">
        {albumData.map((album) => (
          // skickar bara in album i <Album /> istället för att skriva ut all data som tidigare
          // Första hänvisar till Album.js
          // nästa album är attribute dvs en prop
          // tredje album är objekt från data.json(ett js object)
          <Album album={album} />
        ))}
      </section>
    </div>)
};
