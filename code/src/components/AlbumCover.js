/* import React from 'react';
import data from '../data.json';

console.log(data);

const albumInfo = data.albums.items.map((cover) => {
  return {
    albumId: cover.id,
    coverImageUrl: cover.images[1].url
   // song: cover.name,
    // songLink: cover.external_urls.spotify
    // commented out put this in a new component to try and make it all work together
  }
})

console.log(albumInfo)

export const AlbumCover = () => {
  return (
    <div> {albumInfo.map(({ albumId, coverImageUrl }) => (
      <img key={albumId} src={coverImageUrl} alt={`Album ${albumId}`} />
    ))}
    </div>)
}

*/