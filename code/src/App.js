import React from 'react';
import data from './data.json';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Album } from './components/Album/Album.js';
import { Artist } from './components/Artist/Artist';
import { Covers } from './components/Covers/Covers';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <div className="App wrapper">
      <div className="header">
        <Header title="New albums & singles" />
        <hr />
      </div>
      <div className="music-grid">
        {data.albums.items.map((singleAlbumItem) => (
          <div className="album-container" key={singleAlbumItem.id}>
            <Covers cover={singleAlbumItem.images[0].url} album={singleAlbumItem} />
            <Album album={singleAlbumItem} />
            <Artist album={singleAlbumItem} />
          </div>
        ))}
      </div>
    </div>
  );
};