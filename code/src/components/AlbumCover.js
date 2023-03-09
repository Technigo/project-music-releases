import React from 'react';

const AlbumCover = (albumCover) => {
  return (
    <div className="albumCover">
          <img src={albumCover.cover.images[1].url} ></img>
    </div>
  )};


export default AlbumCover;