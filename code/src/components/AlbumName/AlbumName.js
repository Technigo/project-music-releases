
import React from 'react';
import './AlbumName.css';

const AlbumName = (props) => {
  const { name } = props.singleAlbumItem;

  return (
    <div className="AlbumName">
      <h3>{name}</h3>
    </div>
  );
};

export default AlbumName;