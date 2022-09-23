import React from 'react';
import data from './data.json';

import MusicCard from 'project-music-releases/code/src/components/MusicCard.js'

console.log(data);
export const App = () => {
  return (
    <>
      <section className="outer-wrapper">
        <section className="inner-wrapper">
          <div className='heading'>
            <h1> New Albums & singles </h1>
          </div>
          {data.albums.items.map(item => {
            return <MusicCard key={item.id} data={item} />
          })};
        </section>
      </section>
    </>
  );
};

