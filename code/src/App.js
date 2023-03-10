import React from 'react';
import { Header } from 'components/Header';
import { Album } from 'components/Album';

import data from './data.json';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <main className="wrapper">
      <header>
        <Header />
      </header>
      <section className="albumcontainer">
        {data.albums.items.map((album) => {
          return (
            <Album
              image={album.images[1].url}
              albumname={album.name}
              albumurl={album.external_urls.spotify}
              artists={album.artists} />
          )
        })}
      </section>
      <Footer />  
    </main>
  );
}
