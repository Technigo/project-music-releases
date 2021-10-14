import React from 'react';
import Header from 'components/Header';


import data from './data.json';

import Cover from './components/Cover';
import Artist from './components/Artist';
import Title from './components/Title';


console.log(data); // REMOVE

export const App = () => {
  return (
    <div className="app-section">
      <div id="wrapper">
        <div>
        <Header />
      </div>
      <div className="grid-container">
      {data.albums.items.map((element) => {
        console.log(element); //REMOVE
        return (
          <div key={element.id} className="card-container">
            <Cover item={element} />
            <Title item={element} />
            <Artist item={element} />
          </div>
        );
      })} 
        </div>
      </div>
    </div>
  );
  
};


export default App;
