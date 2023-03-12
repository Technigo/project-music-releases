/* eslint-disable linebreak-style */
import React from 'react';

/* A component for name of artists and links for each artist. */
export const AlbumArtist = (props) => {
  return (
    <span className="artist-container">
      <a href={props.artistDetails.external_urls.spotify}>{props.artistDetails.name}</a>
    </span>
  )
}