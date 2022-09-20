import React from 'react';
import data from './data.json';

import { Album }  from './components/Album.js';
import  Header  from './components/Header';

import './index.css';
console.log(data);

export const App = () => {
  return (
    <>
    <div>
    <Header/>
    Who needs ES lint
    <Album />
  </div>
  </>
  );
}
