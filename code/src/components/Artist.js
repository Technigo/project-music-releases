import React from 'react';
import data from '../data.json';

export const Artist = () => {
  return data.albums.items.artist.map((artistItem) => {
    return (<p>{artistItem.name}</p>)
  })
};
