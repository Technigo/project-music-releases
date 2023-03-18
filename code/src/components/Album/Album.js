/* eslint-disable max-len */
import React from 'react';
import './album.css';

export const Album = ({ album }) => {
  return (
    <div className="album-title-container">
      <a href={album.external_urls.spotify} target="_blank" rel="noreferrer" className="album-title">
        <h3>{album.name}</h3>
      </a>
      <div>
        <p className="release-date">Release date: {album.release_date}</p>
      </div>
    </div>
  )
}

// In the Album function we display the name of the album and this is nested inside and anchor tag in order to make the name a link. The user is brought to the album page in Spotify. We also added another div containing the release date of the album, just for fun!