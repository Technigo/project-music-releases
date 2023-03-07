/* import React from 'react';
import { Album } from './Album';

export const Artist = () => {
  return (
    <div>
      {data.albums.items.map((singleAlbumItem) => {
        return (
          {singleAlbumItem.artists.map((artist) => (
            return (<p>{artist.name}</p>)
          ))}
          );
      })}
    </div>)
} */

import React from 'react';
import { Album } from './Album';
import data from '../data.json'; // assuming you have imported the data object correctly

export const Artist = () => {
  return (
    <div>
      {data.albums.items.map((singleAlbumItem) => {
        return (
          <div>
            {singleAlbumItem.artists.map((artist) => (
              <p>{artist.name}</p>
            ))}
            <Album key={singleAlbumItem.id} album={singleAlbumItem} />
          </div>
        );
      })}
    </div>
  );
};

