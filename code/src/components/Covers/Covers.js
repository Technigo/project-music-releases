import React from 'react';

export const Covers = ({ album }) => {
  console.log(album)
  return (
    <div>
      <img src={album.images[0].url} alt="album cover" />
    </div>)
}

//