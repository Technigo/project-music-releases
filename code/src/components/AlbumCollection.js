import React from 'react';

import Album from './Album';

const AlbumCollection = (props) => {
  return (
    <>
      <hr></hr>
      <div className='container'>
        {props.albumList.map((album) => {
          return (
            <Album
              key={album.id}
              src={album.images[1].url}
              title={album.name}
              artistsArray={album.artists}
              albumURL={album.external_urls.spotify}
            />
          );
        })}
      </div>
    </>
  );
};

export default AlbumCollection;
