import React from 'react';
import data from './data.json';
import { AlbumList } from './components/Album/AlbumList';

const { albums } = data;

export const App = () => {
  return (
    <div>
      <div className="album">
        <h3>New albums & singles</h3>
        <AlbumList data={albums} />
      </div>
    </div>
  );
};
