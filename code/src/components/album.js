import React from 'react';
import '../index.css';
import { Header } from './Header';
import { ArtistsName } from './ArtistsName';
import { AlbumImage } from './AlbumImage';

const Album = ({ name, artists, image }) => {
  console.log('album', name, artists);
  return (
    <div className="album">
      <Header />
      <AlbumImage image={image} name={name} />
      <div className="album-details">
        <p>{name}</p>
        {artists.map((artist) => {
          const isLast = artist === artists[artists.length - 1];
          return <ArtistsName key={artist.id} name={artist.name} isLast={isLast} />;
        })}
      </div>
    </div>
  );
};

export default Album;