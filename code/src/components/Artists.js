import React from 'react';
import data from '../data.json';

export const Artists = () => {
  return (
    <div>{data.albums.items.artists.map((artistName) => {
      return (
        <div>
          <p>{artistName.name}</p>
        </div>)
    })}
    </div>
  );
}