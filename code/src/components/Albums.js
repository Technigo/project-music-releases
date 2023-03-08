import React from 'react';
import { Album } from './Album';
import data from '../data.json';

export const Albums = () => {
  console.log(data.albums)
  return (
    <div>
      {
        data.albums.items.map((albumData) => {
          return <Album albumInput={albumData} key={albumData.id} />
        })
      }
    </div>
  );
};
