import React from 'react';

export const AlbumName = ({ name, uri }) => {
  return (
    <a className="album-name" href={uri}>
      {name}
    </a>
  );
};
