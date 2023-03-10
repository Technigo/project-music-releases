import React from 'react';
import { Album } from 'components/Album';
import data from './data.json';
import './App.css';

console.log(data);

export const App = () => {
  return (
    <div>
      <h1 className="title">New releases</h1>
      <Album spotifyList={data} />
    </div>
  );
}
