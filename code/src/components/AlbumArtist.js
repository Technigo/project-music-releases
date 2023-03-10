/* eslint-disable linebreak-style */
import React from 'react';

export const AlbumArtist = (props) => {
  return (
    <div>
      <a href={props.artistDetails.external_urls.spotify}>{props.artistDetails.name}</a>
    </div>
  )
}