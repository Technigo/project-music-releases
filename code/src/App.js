import React from 'react';
import data from './data.json';
import { Header } from './components/Header';
import { AlbumInfo } from './components/AlbumInfo';

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <div>
        {data.albums.items.map((item) => {
          return <AlbumInfo
            key={item.id}
            name={item.name}
            image={item.images[0].url}
            link={item.external_urls.spotify}
            artists={item.artists} />
        })}
      </div>
    </>
  );
}
