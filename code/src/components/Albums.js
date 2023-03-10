import React from 'react';
import { Album } from './Album';
import data from '../data.json';

export const Albums = (props) => {
  console.log(data.albums)
  return (
    <div className="albums-grid">
      {
        data.albums.items.filter((albumData) => albumData.album_type === props.albumTypeInput)
          .map((albumData) => {
            return <Album albumInput={albumData} key={albumData.id} />
          })
      }
    </div>
  );
};
