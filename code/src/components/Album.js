import React from 'react';
import { Artist } from './Artist';

export const Album = (props) => {
  return (
    /* should show album name */
    <div className="album">
      <img src={props.albumDetails.images[0].url} alt="Album Cover" />
      <h2>{props.albumDetails.name}</h2>
      <Artist artists={props.albumDetails.artists} />
    </div>
  );
};
