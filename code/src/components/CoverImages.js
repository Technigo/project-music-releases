import React from 'react';
import data from '../data.json';

export const CoverImages = () => {
  return data.albums.items.map((image) => (
    <img src={image.images[1].url} alt='cover image' />
  ));
  //   <img
  //   src={data.albums.items.map((image) => image.images[1].url)}
  //   alt='TEXT'
  // />
};
