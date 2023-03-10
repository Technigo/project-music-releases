import React from 'react';

// taking in info for artists and creating an array for artists. The {} is destructing
// this and giving us a prop named artists

export const ArtistName = (({ artists }) => {
  return (
    <div className="artist-container">
      {artists.map((artist) => (
        <span className="artist-span">
          <a
            href={artist.external_urls.spotify}
            className="artist-title"
            target="_blank"
            rel="noopener noreferrer">
            {artist.name}
          </a>
        </span>
      ))}
    </div>
  );
});