import React from 'react';
import data from '../data.json';
import { Album } from './Album';

export const AlbumTypeMaster = (props) => {
  return (
    <div className="albums">
      {
        data.albums.items.filter((typeData) => typeData.album_type === props.albumTypeCategory)
          .map((typeData) => {
            return <Album albumCategory={typeData} key={typeData.id} />
          })
      }
    </div>
  );
};