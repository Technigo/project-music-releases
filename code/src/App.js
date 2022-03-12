import React from 'react'
import data from './data.json'

import { Header } from "components/Header";
import { Album } from "components/Album";


export const App = () => {
  return (
    <div>
      <Header />
      <section className='album-container'>
        {data.albums.items.map((album) => { 
            return ( 
              <Album key={album.id} albumDetails={album} />
            );
        })}
      </section>
    </div>
  );
};
