import React from 'react';
import data from './data.json';
import { Header } from './components/Header';
import { Album } from './components/Album';

console.log(data);

/*  */

export const App = () => {
  return (
    <>
      <Header />
      <div className="album-parent">
        {data.albums.items.map((item) => {
          return <Album
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
