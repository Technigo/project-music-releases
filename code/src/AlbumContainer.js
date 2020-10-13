import React from 'react';
import data from './data.json';

import { AlbumDiv } from './AlbumDiv';

export const AlbumContainer = () => {
  return ( <section className = "album-container" >
    <AlbumDiv name = { data.albums.items.name }/> </section>
  )
};