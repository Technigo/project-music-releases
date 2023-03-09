import React from 'react';
import '../index.css';
import { ArtistsName } from './ArtistsName';

const Album = ({ name, artists }) => {
  console.log('album', name, artists);
  return (
    <div>
      <p>{name}</p>
      {artists.map((artist) => {
        return <ArtistsName
          key={artist.id}
          name={artist.name}
          link={artist.external_urls.spotify} />
      })}
    </div>
  );
};

export default Album;
