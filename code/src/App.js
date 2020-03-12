import React from 'react'
import data from './data.json'
import { Album } from 'Albums.js';
import './Hovericons.css'
import './Album.css'

// This compontent will print everything to the right container. 

export const App = () => {
  return (
    <section>
      <h1>New albums & singles</h1>
      <hr></hr>
      <section className="album-container">
        {data.albums.items.map(item => {
          return (<Album key={item.id} item={item} />);
        })}
      </section>
    </section>
  );
};
