import React from 'react';

const AlbumName = ({ title, link }) => {
  // eslint-disable-next-line jsx-quotes
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <p className="song-title">{title}</p>
    </a>
  );
};

export default AlbumName;
