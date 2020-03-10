import React from 'react'
import data from './data.json'
import { Album } from 'Albums.js';

// This compontent will print everything to the right container. 

export const App = () => {
  return (
    <section className="album-container">
      {data.albums.items.map(item => {
        return (<Album key={item.id} item={item} />);
      })}
    </section>
  );
};
