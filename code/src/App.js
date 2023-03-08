import React from 'react';
import data from './data.json';

import { Albumcovers } from './components/Albumcovers';
import { Artists } from './components/Artists';
import { Albums } from './components/Albums';

export const App = () => {
  return (
    <section className="albumcontainer-parent">
      <header>
      <h2 className="header-title">New albums & singels</h2>
      </header>
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
