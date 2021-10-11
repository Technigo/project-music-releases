import React from 'react';
import data from './data.json';
import Album from './components/Album';

console.log(data);

const items = data.albums.items;
export const App = (data) => {
  return (
    <div>
      <h1 className="heading">New albums & singles</h1>
      <div className="container">
        {' '}
        {items.map((item) => {
          return (
            <Album
              key={item.artists[0].id}
              src={item.images[1].url}
              title={item.name}
              artist={item.artists[0].name}
            />
          );
        })}
      </div>
    </div>
  );
};
