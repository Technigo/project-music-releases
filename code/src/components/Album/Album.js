import React from 'react';
import { AlbumCover } from './AlbumCover';
import { AlbumInfo } from './AlbumInfo';

export const Album = ({ data }) => {
  console.log(data);
  return (
    <div className="album-item">
      <AlbumCover image={data.images[1]} />
      <AlbumInfo
        name={data.name}
        uri={data.external_urls.spotify}
        artists={data.artists}
      />
    </div>
  );
};
