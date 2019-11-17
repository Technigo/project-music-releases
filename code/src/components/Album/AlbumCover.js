import React from 'react';
import { AlbumCoverControls } from './AlbumCoverControls';

export const AlbumCover = ({ data }) => {
  console.log(data.url);
  return (
    <div
      style={{ backgroundImage: `url(${data.url})` }}
      className="album-cover"
    >
      <div className="album-cover-overlay">
        <AlbumCoverControls />
      </div>
    </div>
  );
};
