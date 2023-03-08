import React from 'react';
import { AlbumCover } from 'components/AlbumCover';
import { ArtistName } from 'components/ArtistName';
import { SongName } from 'components/SongName';
import { Header } from 'components/Header';
// import data from './data.json';

/* console.log(data); */

export const App = () => {
  return (
    <section className="main-container">
      <div className="album-container">
        <Header />
        <SongName />
        <AlbumCover />
        <ArtistName />
      </div>
    </section>
  );
}
/*
export const App = () => {
  return (
      <>
          <section className = 'outer-wrapper'>

              <div className = 'inner-wrapper'>

                  <Header />

                  <section className='album-container'>
                          {data.albums.items.map(item => {
                              return <Albums key={item.id} data={item}/>
                          })}
                  </section>

              </div>

          </section>

      </>
  ); */