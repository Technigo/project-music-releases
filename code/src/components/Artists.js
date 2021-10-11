import React from 'react';
import data from '../data.json';

export const Artists = () => {
  return <h3>{data.albums.items.map((artist) => artist.artists[0].name)}</h3>;
};
