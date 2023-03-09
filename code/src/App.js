import React from 'react';
import data from './data.json';
import { AlbumCover } from './components/AlbumCover';
import { SongName } from './components/SongName';
import { Header } from './components/Header';
/* import { ArtistName } from './components/ArtistName'; */

/* console.log(data); */

export const App = () => {
  return (
    <section className="main-container">
      <div className="album-container">
        <Header />
        <AlbumCover imageList={data} />
        <SongName songTitle={data} />
        {/* <ArtistName artistList={data} /> */}
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