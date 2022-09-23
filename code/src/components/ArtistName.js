import React from 'react';

const ArtistName = (props) => {
  const artistArray = props.artists;
  const allArtists = artistArray.map((artist, index) => {
    // If the artist is in the last place of the array and the array of artists is longer than 1 add
    // '&' before artistname.
    if (index === artistArray.length - 1 && artistArray.length !== 1) {
      return [' & ', <a className="spotify-link" href={artist.external_urls.spotify}>{artist.name}</a>];
    // If the artist is in the first place of the array, display only artistnamne
    } else if (index === 0) {
      return <a className="spotify-link" href={artist.external_urls.spotify}>{artist.name}</a>;
      // Else add ',' before artistname.
    } else {
      return [', ', <a className="spotify-link" href={artist.external_urls.spotify}>{artist.name}</a>];
    }
  });
  return allArtists;
};

export default ArtistName;