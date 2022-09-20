import React from 'react';
import AlbumCard from 'components/AlbumCard';
import Header from 'components/Header';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <section className="album-card">
        {data.albums.items.map((item) => {
          return <AlbumCard key={item.id} data={item} />
        })}
      </section>
    </>
  );
}