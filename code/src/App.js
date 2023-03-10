import React from 'react';
import { Album } from 'components/Album.js';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div className="main-container">
      <h1>New albums & singles</h1>
      <hr />
      <div className="albums-container">
        {data.albums.items.map((items) => {
          return (
            <Album key={items.id} album={items} />
          )
        })}
      </div>
    </div>
  )
};