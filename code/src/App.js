import React from 'react';
import data from './data.json';
import Card from './Card';
import './style.css';

//import Artist from 'Artist';

console.log(data);

const albumArray = data.albums.items;

export const App = () => {
  return (
    <div className="body">
      <h1>New albums {'&'} singles</h1>
      <main>
        {albumArray.map(item => {
          return (
            <>
              <Card key={item.id} />
            </>
          );
        })}
      </main>
    </div>
  );
};
