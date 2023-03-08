import React from 'react';
import data from './data.json';

import { Albumcovers } from './components/Albumcovers';
import { Artists } from './components/Artists';
import { Albums } from './components/Albums';

export const App = () => {
  return (
    <div className="Albumcontainer">
      {data.albums.items.map((singleAlbumItem) => (
        <div key={singleAlbumItem.id}>
          <Albumcovers cover={singleAlbumItem.images[0].url} />
          <Albums album={singleAlbumItem.name} />
          <Artists album={singleAlbumItem} />
        </div>
      ))}
    </div>
  );
}
