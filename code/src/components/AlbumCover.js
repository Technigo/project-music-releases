import React from 'react';
import data from './data.json';

console.log(data);

export const AlbumCover = (props) => {
  return (
  <div className="AlbumCover">
    <img src={props.albums.images[1].url} />
      
    </div>
  );
};

console.log(AlbumCover)