import React from 'react';
import './artist.css';

export const Artist = ({ album }) => {
  /* console.log(album); */
  return (
    <div className="artist-container">
      {album.artists.map((artist, index) => (
        <div key={artist.id}>
          <a href={album.external_urls.spotify} target="blank" className="artist-name">
            {artist.name}
            {album.artists.length - 1 > index ? ', ' : ''}
          </a>
        </div>
      ))}
    </div>
  )
}