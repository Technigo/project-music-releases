import React from 'react';
import data from './data.json';

import { Header } from './Header';
import { AlbumContainer } from './AlbumContainer';

console.log(data)

export const App = () => {
  return ( 
    <section class="site-container">
      
        <Header />
        <AlbumContainer />
      
    </section>
  )
}