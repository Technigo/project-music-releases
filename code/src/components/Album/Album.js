import React from 'react';
import './Album.css';
import Artists from 'components/Artists/Artists';
import AlbumIcons from 'components/AlbumIcons/AlbumIcons';

const Album = () => {
  return (
    <div className="album">
      <div className="hide">
        <AlbumIcons />
      </div>
      <Artists />
    </div>
  );
};

export default Album;
