import React from 'react';

const AlbumCover = (albumCover) => {
  return (
    <div className="albumCover">
      {albumCover.cover.images.map((image) => {
        return (
          <img src={image.url} ></img>
        )}
          )}
    </div>
  )};


export default AlbumCover;