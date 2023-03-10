/* eslint-disable max-len */
import React from 'react';
import './artist.css';

export const Artist = ({ album }) => {
  return (
    <div className="artist-container">
      {album.artists.map((artist, index) => (
        <div key={artist.id}>
          <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer" className="artist-name">
            {artist.name}
            {album.artists.length - 1 > index ? ' ,' : ''}
          </a>
        </div>
      ))}
    </div>
  )
}

// In the Artist function we use the map function again since artist in the datas is actually an array that contains several artists sometimes. We grab the artist name and display it using artist.name as well as the link to the artist's page in Spotify and then on line 13 we add a comma between each item in the artist array.