import React from 'react';

export const Albumcovers = ({ cover }) => {
  return (
    <div>
      <img className="AlbumCover" src={cover} alt="album cover" />
    </div>)
}