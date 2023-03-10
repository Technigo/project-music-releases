import React from 'react';
import '../index.css';
import { ArtistsName } from './ArtistsName';
import { AlbumImage } from './AlbumImage';

const Album = ({ name, artists, image, link, artistUrl }) => {
  console.log('album', name, artists, artistUrl);
  return (
    <section className="album">
      <a href={link} target="_blank" rel="noreferrer" className="link-album">
        <AlbumImage image={image} name={name} />
        <div className="albumDetails">
          <p>{name}</p>
          {artists.map((artist) => {
            const isLast = artist === artists[artists.length - 1];
            return <ArtistsName
              key={artist.id}
              name={artist.name}
              isLast={isLast}
              artistUrl={artist.external_urls.spotify} />;
          })}
        </div>
      </a>
    </section>
  );
};

export default Album;
