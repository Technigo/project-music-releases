import React from 'react';
import { AlbumArtists } from './AlbumArtists';
import { AlbumImages } from './AlbumImages';

export const Album = (props) => {
  console.log(props);
  return (
    <div>
      <AlbumArtists artistsInput={props.albumInput.artists} />
      <AlbumImages imagesInput={props.albumInput.images} />
    </div>
  );
};