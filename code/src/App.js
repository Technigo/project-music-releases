import React from 'react';
import data from './data.json';
import Card from './Card';
import './app.css';

//import Artist from 'Artist';
const jsonArray = data.albums.items;
console.log(jsonArray)
console.log(data);

export const App = props => {
  return (
    <div>
      <h1>New albums {'&'} singles</h1>
      <main className="main-grid-container">
        {jsonArray.map(item => {
          return (
              <Card key={item.id} album={item} />
          );
        })}
      </main>
    </div>
  );
};
