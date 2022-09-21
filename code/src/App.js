import React from 'react';
import data from './data.json';

import MusicCard from './components/MusicCard'

console.log(data);
export const App = () => {
  return (
    <>
      <section className="outer-wrapper">
        <div className="inner-wrapper">
          {data.albums.items.map(item => {
            return <MusicCard key={item.id} data={item} />
          })};     
        </div>
      </section>
    </>
  );
};

