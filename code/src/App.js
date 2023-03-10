import React from 'react';
import { Album } from 'components/Album';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div>
      <Album spotifyList={data} />
    </div>
  );
}
