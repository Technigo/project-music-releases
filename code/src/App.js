import React from 'react';
import { Header } from 'components/Header';
import data from './data.json';
import Album from './components/album';

export const App = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div>
        <main className="albums">
          {data.albums.items.map((item) => {
            return (
              <Album
                key={item.id}
                name={item.name}
                artists={item.artists}
                image={item.images[0]}
                link={item.external_urls.spotify} />
            );
          })}
        </main>
      </div>
    </>
  );
};
