import React from 'react';

export const AlbumImage = ({ image, name }) => {
  return (
    <div className="album-image">
      <img src={image.url} alt={`Cover art for ${name}`} />
    </div>
  );
};