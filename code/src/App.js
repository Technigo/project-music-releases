import React from 'react';
import data from './data.json';

import Header from './components/Header';
import { SongCard } from './components/SongCard';

export const App = () => {
  return (
    <>
      <header className='header'>
        <Header />
        <hr />
      </header>
      <section className='song-card-container'>
        {/* map to iterate through each release and put data in to song cards */}
        {data.albums.items.map((releaseContent) => {
          return (
            <SongCard key={releaseContent.id} objectItem={releaseContent} />
          );
        })}
      </section>
      <footer>
        <p>&#169;2021 by Sofia and Katie</p>
        <p>
          Team Foxes
          <span role='img' aria-label='fox emoji'>
            &nbsp;🦊&nbsp;
          </span>
          | Technigo
        </p>
      </footer>
    </>
  );
};
