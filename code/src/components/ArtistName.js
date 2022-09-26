/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React from 'react';

const ArtistName = ({ artists }) => {
  console.log(artists);
  return (
    <section className="artist-container">
      {artists.map((artist, index) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={artist.external_urls.spotify}
            className="artist-link"
            key={artist.id}>
            <div className="artist-name">
              <p key={artist.id}>
                {/* prettier-ignore */}
                {artist.name}{index === artists.length - 2 ? ' & ' : index < artists.length - 2 ? ', ' : ' '}
              </p>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default ArtistName;
