import React from 'react';
import './Albums.css';

export const Albums = ({ hrefAlbum, album }) => {
  return (
    <div>
      <a className="albumlink" href={hrefAlbum} target="_blank" rel="noopener noreferrer">
        <h3 className="album-name">{album}</h3>
      </a>
    </div>
  );
};
