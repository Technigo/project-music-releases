import React from 'react';
import data from './data.json';
import './index.css';
import { Header } from './components/Header';
import { AlbumInfo } from './components/AlbumInfo';

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <main className="albums">
        {data.albums.items.map((item) => {
          return <AlbumInfo
            key={item.id}
            name={item.name}
            image={item.images[0].url}
            link={item.external_urls.spotify}
            artists={item.artists} />
        })}
      </main>
    </>
  );
}
