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
        <div className="artist-box">
          {album.artists.map(artist => {
            return (
              <Artist
                key={artist.id}
                artistName={artist.name}
                artistURL={artist.external_urls.spotify}
              />
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Card;

/*{album.artists.map(artist => {
            return (
              <Artist
                key={artist.id}
                artistName={artist.name}
                artistURL={artist.external_urls.spotify}
              />
            );
          })} */