import React from 'react';
import { Header } from 'components/Header';
import { Album } from 'components/Album';
import { Footer } from 'components/Footer';
import data from './data.json';

export const App = () => {
  return (
    <main className="wrapper">
      <header>
        <Header />
      </header>
      <section className="main-container">
        {data.albums.items.map((album) => {
          return (
            <Album
              image={album.images[0].url}
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
