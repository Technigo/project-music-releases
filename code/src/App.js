import React from 'react';
import data from './data.json';
import Card from './Card';
import { Aside } from './Aside';
import './app.css';

//import Artist from 'Artist';
const dataArray = data.albums.items;
const singleArray = dataArray.filter(single => single.album_type === 'single');
console.log(singleArray);
const albumArray = dataArray.filter(album => album.album_type === 'album');
console.log(albumArray);
export const App = () => {
  return (
    <>
      <h1 className="app__header">New albums {'&'} singles</h1>
      <aside>
        <Aside />
      </aside>
      <main className="app__grid">
        <div className="app__grid">
          <section>
            <h2>Singles</h2>
            {singleArray.map(album => {
              return <Card key={album.name} album={album} />;
            })}
          </section>
          <section>
            <h2>Albums</h2>
            {albumArray.map(album => {
              return <Card key={album.name} album={album} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
};
