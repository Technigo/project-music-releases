import React from 'react';

export const AlbumImage = (props) => {
    return (
      <div>
        <img src={props.artistDetails.images[1]} alt="album art" />
      </div>
    )
  };


