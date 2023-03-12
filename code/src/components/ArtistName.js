import React from 'react';

export const ArtistName = (props) => {
  console.log('artist', props)
  return (
    <div className="artist-name">
      {props.artistArray.map((artist) => {
        return (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer">
            <h3 className="artist-name-h3">{artist.name}</h3>
          </a>
        );
      })}
    </div>
  );
};

