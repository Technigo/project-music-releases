import React from 'react';

const ArtistName = (props) => {
  const artistArray = props.artists;
  const allArtists = artistArray.map((artist, index) => {
    if (index === artistArray.length - 1 && artistArray.length !== 1) {
      return [' & ', <a className="spotify-link" href={artist.external_urls.spotify}>{artist.name}</a>];
    } else if (index === 0) {
      return <a className="spotify-link" href={artist.external_urls.spotify}>{artist.name}</a>;
    } else {
      return [', ', <a className="spotify-link" href={artist.external_urls.spotify}>{artist.name}</a>];
    }
  });
  return allArtists;
};

export default ArtistName;