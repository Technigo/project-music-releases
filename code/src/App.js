import React from 'react';
import AlbumCard from 'components/AlbumCard';
import Header from 'components/Header';
import data from './data.json';

console.log(data);

export const App = () => {
  const albums = data.albums.items;

  return (
    <>
      <Header />
      <section className="album-section">
        {albums.map((item) => {
          return <AlbumCard key={item.id} albumInformation={item} />;
        })}
      </section>
      <hr />
      <footer>
        <p>&#169;2022 by Saralie and Antonella</p>
        <p>
          Team Foxes
          <span role="img" aria-label="fox emoji">
            &nbsp;🦊&nbsp;
          </span>
          | Technigo
        </p>
      </footer>
    </>
  );
};
