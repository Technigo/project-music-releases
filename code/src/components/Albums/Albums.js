import React from 'react';
import './Albums.css';

export const Albums = ({ album }) => {
  return (
    <div>
      <h3 className="album-name">{album}</h3>
    </div>
  );
};
