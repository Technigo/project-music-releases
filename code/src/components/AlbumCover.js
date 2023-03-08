import React from 'react';

import data from '../data.json';
/*
const coverImageUrl = data.albums.items.map((cover) => {
  return (cover.images[1].url)
}) */
console.log(data);

const albumInfo = data.albums.items.map((cover) => {
  return {
    albumId: cover.id,
    coverImageUrl: cover.images[1].url
  }
})

export const AlbumCover = () => {
  return (
    <div> {albumInfo.map(({ albumId, coverImageUrl }) => (
      <img key={albumId} src={coverImageUrl} alt={`Album ${albumId}`} />
    ))}
    </div>)
}

