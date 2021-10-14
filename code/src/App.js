import React from 'react';
import Header from 'components/Header';

import data from './data.json';

import Cover from './components/Cover';
import Artist from './components/Artist';
import Album from './components/Album';

console.log(data); // REMOVE

export const App = () => {
  return (
    <div className="app-section">
      <Header />
      {data.albums.items.map((element) => {
        console.log(element); //REMOVE
        return (
          <div key={element.id} className="app-container">
            <Cover item={element} />
            <Album item={element} />
            <Artist item={element} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
