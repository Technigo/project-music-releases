import React from 'react';
<<<<<<< HEAD

import { AlbumArtist } from './AlbumArtist';

export const AlbumCard = (props) => {
  return (
    <>
      <section className="album">
        <div className="image-icons-container">
          <div className="image-container">
            <img src={props.img} alt="Album cover" />
          </div>
          <div className="icons-container">
            <img className="icons" src="./icons/heart.svg" alt="heart-icon" />
            <img className="play-icon" src="./icons/play.svg" alt="play-icon" />
            <img
              className="icons"
              src="./icons/dots.svg"
              alt="three dots-icon"
            />
          </div>
        </div>
=======
// import Album Cover
import AlbumCover from './AlbumCover';
import AlbumArtist from './AlbumArtist';

// import Album Artist

//export const AlbumCard = (props)

export const AlbumCard = (props) => {
  const coverImg = props.coverImg[1].url;
  return (
    <>
      <section className="album-card-container">
        <AlbumCover
          //  Key ?
          url={coverImg[1].url}
        />
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e

        <a
          className="album-title"
          href={props.albumUrl}
          target="_blank"
<<<<<<< HEAD
          rel="noopener noreferrer"
=======
          rel="#"
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e
        >
          {props.title}
        </a>

<<<<<<< HEAD
        <div className="artist-name-container">
          {props.artist.map((artist) => {
            return (
              <AlbumArtist
                key={artist.name}
                artistName={artist.name}
                artistUrl={artist.external_urls.spotify}
              />
            );
          })}
=======
        <div className="album-artist-container">
          {props.artist.map((artist) => (
            <AlbumArtist
              key={artist.id}
              artistName={artist.name}
              artistUrl={artist.external_urls.spotify}
            />
          ))}
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e
        </div>
      </section>
    </>
  );
};
