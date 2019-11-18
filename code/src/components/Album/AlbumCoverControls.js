import React from 'react';
import { Heart } from './../Icons/Heart';
import { Play } from './../Icons/Play';
import { More } from './../Icons/More';

export const AlbumCoverControls = () => {
  return (
    <div className="album-cover-controls">
      <div>
        <Heart />
      </div>
      <div>
        <Play />
      </div>
      <div>
        <More />
      </div>
    </div>
  );
};
