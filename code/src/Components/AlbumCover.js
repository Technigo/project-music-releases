import React from 'react';

const AlbumCover = (props) => {
  return (
    <img src={props.item.images[1].url} alt="Album cover"></img>
  );
}

export default AlbumCover;