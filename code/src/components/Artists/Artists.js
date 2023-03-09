import React from 'react';
import './Artists.css';

export const Artists = ({ album }) => {
  return (
    <div>
      {album.artists.map((artist, index) => (
        <div key={artist.id}>
          <p className="artist-name">
            <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              {artist.name}
            </a>
            {album.artists.length - 1 > index ? ', ' : ''}
          </p>
        </div>
      ))}
    </div>
  )
}