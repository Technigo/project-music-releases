import React from 'react';

import { Header } from './Components/Header';
import { AlbumContainer } from './Components/AlbumContainer';


export const App = () => {
  return ( 
    <section className="site-container">
      
        <Header />
        <AlbumContainer />
      
    </section>
  )
}