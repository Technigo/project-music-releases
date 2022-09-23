import React from 'react';

const AlbumName = (props) => {
  return (
    <>
      <a href={props.albumLink} target="_blank">
        <h2 className='album-title'>{props.albumName}</h2>
      </a>
    </>
  );
}

export default AlbumName