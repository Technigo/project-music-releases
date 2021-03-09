import React from 'react';
import './Album.css';
import Artists from 'components/Artists/Artists';
import AlbumIcons from 'components/AlbumIcons/AlbumIcons';

const Album = () => {
  return (
    <div className="album">
      <img
        className="album__image"
        src="https://i.scdn.co/image/a8b8d0bd26dc496f5b9ea65994172c5d541aa1b9"
        alt="hdjak"
      />
      <div className="album__icons--wrapper">
        <AlbumIcons />
      </div>
      <h3>Album Name</h3>
      <Artists />
    </div>
  );
};

export default Album;
