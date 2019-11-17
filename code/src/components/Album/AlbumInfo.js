import React from 'react';
import { AlbumArtists } from './AlbumArtists';
import { AlbumName } from './AlbumName';

export const AlbumInfo = ({ name, uri, artists }) => {
  return (
    <div className="album-info">
      <AlbumName name={name} uri={uri} />
      <AlbumArtists artists={artists} />
    </div>
  );
};
