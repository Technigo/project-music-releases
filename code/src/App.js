import React from 'react';
import data from './data.json';
import Card from './Card';
import './style.css';

//import Artist from 'Artist';

console.log(data);

export const App = () => {
  return (
    <div className="body">
      <h1>New albums {'&'} singles</h1>
      <main>
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
