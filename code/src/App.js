import React from 'react';
import data from './data.json';

import Album from './components/Album';

console.log(data);

const albumsArray = data.albums.items;
export const App = () => {
  return (
    <div>
      <h1 className="heading">New albums & singles</h1>
      <div className="container">
        {' '}
        {albumsArray.map((album) => {
          return (
            <Album
              key={album.artists[0].id}
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
