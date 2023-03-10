import React from 'react';
import data from './data.json';
import { Album } from './components/Album.js';

console.log(data);

const albumItems = data.albums.items.map((item, index) => {
  item.key = index;
  return item;
});

export const App = () => {
  return (
    <div className="main-container">
      <h1>New albums & Singles</h1>
      <hr />
      <div className="albums-container">
        {albumItems.map((item) => (
          <Album item={item} key={item.key} />
        ))}
      </div>
    </div>
  )
}

