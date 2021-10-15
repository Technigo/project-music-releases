import React from 'react';
import data from './data.json';

import AlbumCollection from 'components/AlbumCollection';

const filteredSingles = data.albums.items.filter(
  (release) => release.album_type === 'single'
);

const filteredAlbums = data.albums.items.filter(
  (release) => release.album_type === 'album'
);

export const App = () => {
  return (
    <div>
      <h1 className='heading'>New albums</h1>
      <AlbumCollection albumList={filteredAlbums} />
      <h1 className='heading'>New singles</h1>
      <AlbumCollection albumList={filteredSingles} />
    </div>
  );
};
