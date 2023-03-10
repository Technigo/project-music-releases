import React from 'react';
import data from './data.json';
import './index.css';
import { Header } from './components/Header';
import { AlbumMaster } from './components/AlbumMaster';

console.log(data);

export const App = () => {
  return (
    <main className="albums">
      <Header />
      {data.albums.items.map((item) => {
        return <AlbumMaster
          key={data.id}
          data={item} />
      })}
    </main>

  );
}

