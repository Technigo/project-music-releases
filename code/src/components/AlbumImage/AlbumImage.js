import React from 'react';
import './AlbumImage.css';
import AlbumIcons from 'components/AlbumIcons/AlbumIcons';

const AlbumImage = (props) => {
  return (
    <>
      <img className="album__image" src={props.image} alt="Album Cover Art" />
      <div className="album__icons--wrapper">
        <AlbumIcons url={props.url} />
      </div>
    </>
  );
};

export default AlbumImage;
