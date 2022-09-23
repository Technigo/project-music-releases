import React from 'react';

import { AlbumArtist } from './AlbumArtist';

export const AlbumCard = (props) => {
  return (
    <>
      <section className="album-card">
        <div className="cover-icons-container">
          <div className="cover-container">
            <img src={props.img} alt="Album cover" />
          </div>
          <div className="icons-container">
            <img
              className="hart icon"
              src="./icons/heart.svg"
              alt="Hart icon"
            />
            <img className="play icon" src="./icons/play.svg" alt="Play icon" />
            <img
              className="dots icon"
              src="./icons/dots.svg"
              alt="three dots icon"
            />
          </div>
        </div>
        <a
          className="album-title"
          href={props.albumUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>

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
        </div>
      </section>
    </>
  );
};
