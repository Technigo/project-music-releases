/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumList } from 'components/AlbumList';
import { Header } from './components/Header';

import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <section className="app"><Header />
      <main className="wrapper">
        <div className="album-list-wrapper">
          <AlbumList data={data} />
        </div>
      </main>
    </section>
  );
}

// data.map((album) => (<div><AlbumCard name={album.albums.items.name} /></div>))}