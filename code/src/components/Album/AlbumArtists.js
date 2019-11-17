import React from 'react';
import { Artist } from './Artist';

export const AlbumArtists = ({ artists }) => {
  const artistElements = artists.map(artist => {
    return <Artist key={artist.id} data={artist} />;
  });

  return <div className="album-artists">{artistElements}</div>;
};
