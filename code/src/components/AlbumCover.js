import React from 'react';
import Icons from './Icons';

const AlbumCover = (albumCover) => {
  return (
    <div className="albumCover">
          <img src={albumCover.cover.images[1].url} />
          <Icons />
    </div>
  )};


export default AlbumCover;