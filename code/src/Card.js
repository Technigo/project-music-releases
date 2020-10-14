import React from 'react';
import Image from 'Image';
import Artist from 'Artist';
import Album from 'Album';
import Icons from 'Icons';
import './card.css';

/* WHAT WE ACTUALLY DID HERE:
Album: Enter each album, fetch name for both key and albumName, and fetch url, 
Artist: Enter each album, inside album fetch the artist at index-number, then fetch id, name and url for spotify
props.album = props.the html attribute, so in app.js "album" is album={whatever we send in the map as parameter} */

const Card = props => {
  const album = props.album;
  return (
    <>
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
        {album.artists.map(artist => {
          return (
            <Artist
              key={artist.id}
              artistName={artist.name}
              artistURL={artist.external_urls.spotify}
            />
          );
        })}
      </article>
    </>
  );
};

export default Card;

/* const Card = props => {
  return (
    <>
      {data.albums.items.map(item => (
        <article className="card">
          <div className="image-container">
            <Image key={item.images[0].url} item={item} />
            <Icons />
          </div>
          <Artist
            key={item.artists[0].id}
            artistName={item.artists[0].name}
            artistURL={item.artists[0].external_urls.spotify}
          />
          <Album
            key={item.name}
            albumName={item.name}
            albumURL={item.external_urls.spotify}
          />
        </article>
      ))}
    </>
  );
}; */
