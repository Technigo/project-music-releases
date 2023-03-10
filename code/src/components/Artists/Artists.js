import React from 'react';
import './Artists.css';

export const Artists = ({ album }) => {
  return (
    <div>
      {album.artists.map((artist, index) => (
        <div className="artists-line" key={artist.id}>
          <a className="artistlink" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <h3 className="artist-name">{artist.name}</h3>
            {album.artists.length - 1 > index ? ', ' : ''}
          </a>
        </div>
      ))}
    </div>
  )
}