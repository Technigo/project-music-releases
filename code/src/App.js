import React from 'react';
import data from './data.json';
import { Album } from './components/Album.js'

console.log(data);

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      <Album spotifyData={data} />
    </div>
  );
}
