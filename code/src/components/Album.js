import React from 'react';

// import { ArtistName } from './components/ArtistName';

export const Album = ({ songName, albumKey, imageUrl, songUrl }) => {
  return (
    <div key={albumKey}>
      <img src={imageUrl} alt={`${songName} album cover`} />
      <a href={songUrl} className="song-title">
        {songName}
      </a>
    </div>);
};