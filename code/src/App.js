import React from 'react';
import data from './data.json';
import { Album } from './components/Album';
import { Header } from './components/Header';
import './index.css';

const albumsArray = data.albums.items;

export const App = () => {
  return (
    <>
      <Header />
      <div className="albums-container">
        {albumsArray.map((album) => {
          return <Album
            key={album.name}
            name={album.name}
            imgsrc={album.images[0].url}
            artists={album.artists}
            albumurl={album.external_urls.spotify} />
        })}
      </div>
    </>
  );
};
