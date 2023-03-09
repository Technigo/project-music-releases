import React from 'react';
import { ArtistName } from './ArtistName';

// bytt ut songName, albumKey osv till album som attribute(props) alltså album är vår props ist
export const Album = ({ album }) => {
  return (
    <div className="album-container" key={album.id}>
      <img className="album-cover" src={album.images[1].url} alt={`${album.name} album cover`} />
      <a
        href={album.external_urls.spotify}
        className="song-title"
        target="_blank"
        rel="noopener noreferrer">
        {album.name}
      </a>
      {/* samma princis som i app.js och album */}
      <ArtistName artists={album.artists} />
    </div>);
};