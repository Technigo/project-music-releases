import React from 'react';
import data from './data.json';
import Header from './components/Header/Header';
import Album from './components/Album';

import './index.css';

console.log(data);

const App = () => {
  return (
    <div>
      <h1>Tjoho</h1>
      <Header />
      <Album mapdata={data} />
    </div>
  );
}

export default App;