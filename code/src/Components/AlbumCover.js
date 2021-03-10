import React from 'react';

const AlbumCover = (props) => {
  return (
    <div className="album-cover">
        <img src={props.item.images[1].url} alt="Album cover"></img>
    </div>
  );
}

export default AlbumCover;