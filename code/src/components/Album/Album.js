import React from 'react';
import './album.css';

export const Album = ({ album }) => {
  console.log(album);
  return (
    <div>
      <h3 className="album-title">{album}</h3>
    </div>
  )
}