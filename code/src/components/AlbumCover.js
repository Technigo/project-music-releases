import React from 'react';
import data from './data.json';

console.log(data);

export const AlbumCover = (props) => {
  return (
  <div className="AlbumCover">
    <img src={album.images[0].url} />
      
    </div>
  );
};
