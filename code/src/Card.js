import React from 'react';
import Image from 'Image';
import Artist from 'Artist';
import Album from 'Album';
import './card.css';

const Card = props => {
  const album = props.album;
  const artistsArray = album.artists.map(artist => {
    const name = artist.name;
    const URL = artist.external_urls.spotify;
    return { name, URL };
  });

  return (
    <article className="card">
      <Image
        key={album.href}
        imageBig={album.images[0].url}
        imageSmall={album.images[1].url}
      />
      <Album
        key={album.name}
        albumName={album.name}
        albumURL={album.external_urls.spotify}
      />
      <div className="artist__container">
        {artistsArray.map((artist, index) => {
          return (
            <Artist
              key={artist.name}
              index={index}
              artistName={artist.name}
              artistURL={artist.URL}
              length={artistsArray.length}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Card;
