import React from 'react';
import '../index.css';
import { ArtistsName } from './ArtistsName';
import { AlbumImage } from './AlbumImage';

const Album = ({ name, artists, image, link }) => {
  console.log('album', name, artists);
  return (
    <section className="album">
      <div><AlbumImage image={image} name={name} /></div>
      <div className="textContainer">
        <div className="albumDetails">
          <a href={link} target="_blank" rel="noreferrer" className="albumLink">
            <span>{name}</span>
          </a>
        </div>
        <div className="artistDetails">
          {artists.map((artist, index) => {
            const isLast = index === artists.length - 1;
            return (
              <ArtistsName
                key={artist.id}
                name={artist.name}
                isLast={isLast}
                artistUrl={artist.external_urls.spotify} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Album;