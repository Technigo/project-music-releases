import React from 'react';
import { Album } from './Album';

export const AlbumList = ({ data }) => {
  const albums = data.items.map(album => {
    return <Album key={album.id} data={album} />;
  });

  return <div className="album-list">{albums}</div>;
};
