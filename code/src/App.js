/* eslint-disable max-len */
import React from 'react';
import data from './data.json'; // The Spotify-data
import 'bootstrap-icons/font/bootstrap-icons.css'; // This imports the icons from the react bootstrap

// importing the different components
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

// The App function maps over the data.json-file and collects the albums, which is called items in the data. In the map function it creates a div for every item (renamed to SingleAlbumItem) as it maps over and in that div the some props are sent (renamed again to album) to the Covers, Artist and Album components. The div album-container make up the items in the grid called music-grid.