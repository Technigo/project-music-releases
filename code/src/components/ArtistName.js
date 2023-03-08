/* import React from 'react';
import data from '../data.json';

// artist list
const artistList = data.albums.items.map((artist) => {
  return artist.name
});

const artistUrl = data.albums.items.map((artistLink) => {
  return artistLink.artists[0].external_urls.spotify;
});

console.log(artistUrl)

/* console.log(artistList) */
/*
export const ArtistName = () => {
  return (
    {albumInfo.map(({ albumId, coverImageUrl }) => (
      <img key={albumId} src={coverImageUrl} alt={`Album ${albumId}`} />
    ))}
  )
}
 */