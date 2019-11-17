import React from 'react';
import { AlbumCover } from './AlbumCover';
import { AlbumInfo } from './AlbumInfo';

export const Album = ({ data }) => {
  // console.log(data);
  return (
    <div className="album-item">
      <AlbumCover data={data.images[1]} />
      <AlbumInfo name={data.name} uri={data.uri} artists={data.artists} />
    </div>
  );
};
