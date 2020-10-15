import React from 'react';
import data from './data.json';
import Card from './Card';
import './app.css';

//import Artist from 'Artist';
const albumArray = data.albums.items;
console.log(albumArray);
console.log(data);

export const App = () => {
  return (
    <div>
      <h1>New albums {'&'} singles</h1>
      <main className="main-grid-container">
        {albumArray.map(album => {
          return <Card key={album.name} album={album} />;
        })}
      </main>
    </div>
  );
};
