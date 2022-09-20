import React from 'react';

export const AlbumCover = (props) => {
    return (
        <div className="AlbumCover">
          <img src={props.cover} alt="album-cover" />
        </div >
      );
}