import React from 'react';
import data from './data.json';
import { Album } from './components/Album'
// import { Artist } from './components/Artist'

console.log(data);

export const App = () => {
  return (
    <div>
      <Album />
      Find me in src/app.js!
    </div>
  );
}// <Artist />