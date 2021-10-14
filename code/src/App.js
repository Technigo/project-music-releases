import React from 'react';
import data from './data.json';

import Album from './components/Album';

const albumsArray = data.albums.items;
export const App = () => {
  return (
    <div>
      <h1 className="heading">New albums & singles</h1>
      <hr></hr>
      <div className="container">
        {' '}
        {albumsArray.map((album) => {
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
    </div>
  );
};
