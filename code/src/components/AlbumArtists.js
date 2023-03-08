import React from 'react';

export const AlbumArtists = (props) => {
  return (
    <div>
      {props.artistsInput.map((artist) => {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            href={artist.external_urls.spotify}>
            {artist.name}
          </a>
        );
      })}
    </div>
  );
};
