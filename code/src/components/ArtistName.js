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
              <h3 key={artist.id}>
                {artist.name}
                {/* prettier-ignore */}
                {artists.length - 2 === index
                  ? ' & .'
                  : index < artists.length - 2
                  ? ', .'
                  : ' '}
              </h3>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default ArtistName;
