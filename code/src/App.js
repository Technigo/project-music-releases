import React from 'react';
import data from './data.json';
import Card from './Card';
import './app.css';

//import Artist from 'Artist';

console.log(data);

export const App = () => {
  return (
    <div>
      <h1>New albums {'&'} singles</h1>
      <main className="main-grid-container">
        {data.albums.items.map(item => {
          return (
            <>
              <Card album={item}/>
            </>
          );
        })}
      </main>
    </div>
  );
};
