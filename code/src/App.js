import React from 'react';
import data from './data.json';
import { AlbumList } from './components/Album/AlbumList';

const { albums } = data;

export const App = () => {
  return (
    <div className="album">
      <AlbumList data={albums} />
    </div>
  );
};
