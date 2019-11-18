import React from 'react';
import { AlbumCoverControls } from './AlbumCoverControls';

export const AlbumCover = ({ image }) => {
  // console.log(data);
  return (
    <div
      style={{ backgroundImage: `url(${image.url})` }}
      className="album-cover"
    >
      <div className="album-cover-overlay">
        <AlbumCoverControls />
      </div>
    </div>
  );
};
