import React from 'react';
import data from './data.json';
import playlists from './stretch-goal.json';
import { Albums } from './components/Albums'
import { Playlists } from './components/Playlists'

export const App = () => {
  return (
    <div className="app-container">
      <div className="releases-container">
        <h1>New albums</h1>
        <hr />
        <Albums data={data} filter="album" />
        <h1>New singles / EPs</h1>
        <hr />
        <Albums data={data} filter="single" />
      </div>
      <div className="playlists-container">
        <Playlists data={playlists} />
      </div>
    </div>
  )
};
