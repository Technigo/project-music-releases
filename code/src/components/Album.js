import React from 'react';
import AlbumDetails from './AlbumDetails';

const Album = (props) => {
  return (
    <div className="albums-container">
      {props.albumData.albums.items.map((singleAlbum) => {
        if (singleAlbum.album_type === 'album') {
          return (
            <AlbumDetails key={singleAlbum.id} albumInfo={singleAlbum} />
          )
        } else {
          return (null)
          // must include an "else" statement in order to avoide ESList errors.
        }
      })}
    </div>
  )
};

export default Album;