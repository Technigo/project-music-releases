import React from 'react';

export const Artists = (props) => {
  const artists = props.artists.map((artist) => ({
    name: artist.name,
    url: artist.external_urls.spotify
  }));
  const artistLinks = artists.map((artist) => (
    <a key={artist.url} href={artist.url} target="_blank" rel="noopener noreferrer">{artist.name}</a>
  ));

  return (
    <div className="artist-name">
      <h2>{artistLinks}</h2>
    </div>
  )
}
