import React from 'react';
import data from '../data.json';

export const Album = () => {
  return (
    <div>
      {data.albums.items.map((singleAlbumItem) => {
        return (<p>{singleAlbumItem.name}</p>);
      })}
    </div>)
}
