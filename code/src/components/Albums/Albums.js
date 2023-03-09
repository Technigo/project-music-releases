import React from 'react';
import './Albums.css';

export const Albums = ({ album }) => {
  return (
    <div>
      <a className="albumlink" href={album.external_urls} target="_blank" rel="noopener noreferrer">
        <h3 className="album-name">{album}</h3>
      </a>
    </div>
  );
};
