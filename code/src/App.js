import React from 'react';
import data from './data.json';

import { Albumcovers } from './components/Albumcovers/Albumcovers';
import { Artists } from './components/Artists/Artists';
import { Albums } from './components/Albums/Albums';

export const App = () => {
  return (
    <section className="albumcontainer-parent">
      <p className="header">
        <h2 className="header-title">New albums & singles</h2>
      </p>
      <div className="albumcontainer">
        {data.albums.items.map((singleAlbumItem) => (
          <div key={singleAlbumItem.id}>
            <Albumcovers cover={singleAlbumItem.images[1].url} />
            <Albums album={singleAlbumItem.name} />
            <Artists album={singleAlbumItem} />
          </div>
        ))}
      </div>
    </section>
  );
}
