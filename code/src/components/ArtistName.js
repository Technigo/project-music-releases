import React from 'react';

// här får vi in artists och gör en array av artister. {} gör att vi destructar
// och plockar en prop dvs artists

export const ArtistName = (({ artists }) => {
  return (
    <div className="mango">
      {artists.map((artist) => (
        <span className="artist-hej">
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