import React from 'react';

// här får vi in artists och gör en array av artister. {} gör att vi destructar
// och plockar en prop dvs artists
export const ArtistName = (({ artists }) => {
  return (
    <>
      {/* artists.map så hämtar vi direkt från artist i data json i länk och artist.namn */}
      {artists.map((artist) => (
        <div>
          <a href={artist.external_urls.spotify}>
            {artist.name}
          </a>
        </div>))}
    </>
  );
});