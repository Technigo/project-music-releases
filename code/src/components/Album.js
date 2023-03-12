import React from 'react';
import { ArtistName } from './ArtistName';

//  making album our (props) and destructing it in the {} to acess the rest of the api info
export const Album = ({ album }) => {
  return (
    <div className="album-container" key={album.id}>
      <div className="img-overlay">
        <img className="album-cover" src={album.images[1].url} alt={`${album.name} album cover`} />

        <div className="img-icons">
          <img className="heart-icon" src="./icons/heart.svg" alt="heart this song" />
          <img className="play-icon" src="./icons/play.svg" alt="play this song" />
          <img className="dots-icon" src="./icons/dots.svg" alt="options" />
        </div>
      </div>
      <a
        href={album.external_urls.spotify}
        className="song-title"
        target="_blank"
        rel="noopener noreferrer">
        {album.name}
      </a>
      {/* same principle as we've done in app.js with our album component */}
      <ArtistName artists={album.artists} />
    </div>);
};
