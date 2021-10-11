import React from 'react';
import data from '../data.json';

export const SongTitle = () => {
  //   return <h2>{data.albums.items[0].name}</h2>;
  return <h2>{data.albums.items.map((title) => title.name)}</h2>;
  //   return data.albums.items.map((title) => {
  //     title.name;
  //   });
  //   const SongTitles = SongTitles.map((title) => {
  //     return {data.albums.items};
  //   });
};
