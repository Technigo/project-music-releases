import React from 'react';
import '../index.css';
import { ArtistName } from './ArtistName';

const Album = ({ name, artists }) => {
  console.log('album', name, artists);
  return (
    <div>
      <p>{name}</p>
      <ArtistName artists={artists} />
    </div>
  );
};

export default Album;
