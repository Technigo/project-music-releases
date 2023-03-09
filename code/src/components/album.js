import React from 'react';
import '../index.css';
import { ArtistsName } from './ArtistsName';
import { AlbumImage } from './AlbumImage';

const Album = ({ name, artists, image }) => {
  console.log('album', name, artists);
  return (
    <div className="album">
      <AlbumImage image={image} name={name} />
      <div className="album-details">
        <p>{name}</p>
        {artists.map((artist) => {
          return <ArtistsName key={artist.id} name={artist.name} />;
        })}
      </div>
    </div>
  );
};

export default Album;