import React from 'react';
import './artist.css';

export const Artist = ({ album }) => {
  /* console.log(album); */
  return (
    <div className="artist-container">
      {album.artists.map((artist, index) => (
        <div key={artist.id}>
          <a href={album.artists[0].external_urls.spotify} target="_blank" rel="noreferrer" className="artist-name">
            {artist.name}
            {album.artists.length - 1 > index ? ', ' : ''}
          </a>
        </div>
      ))}
    </div>
  )
}