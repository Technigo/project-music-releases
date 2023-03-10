import React from 'react';
import Icons from './Icons';

const AlbumCover = (albumCover) => {
  return (
    <div className="image-container">
          <img src={albumCover.cover.images[1].url} className="album-image"/>
          <Icons />
    </div>
  )};


export default AlbumCover;