import React from 'react';
import './album.css';

export const Album = ({ album }) => {
  console.log(album);
  return (
    <div className="album-title-container">
      <a href={album.external_urls.spotify} target="_blank" rel="noreferrer" className="album-title">
        <h3>{album.name}</h3>
      </a>
    </div>
  )
}