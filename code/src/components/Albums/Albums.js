import React from 'react';
import './Albums.css';

export const Albums = ({ hrefAlbum, album }) => {
  return (
    <div className="album-area">
      <a className="albumlink" href={hrefAlbum} target="_blank" rel="noopener noreferrer">
        <div>
        <h3 className="album-name">{album}</h3>
        </div>
      </a>
    </div>
  );
};
