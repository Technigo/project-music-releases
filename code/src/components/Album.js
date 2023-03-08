import React from 'react';
import { AlbumArtists } from './AlbumArtists';
import { AlbumImages } from './AlbumImages';
import { AlbumName } from './AlbumName';

export const Album = (props) => {
  console.log(props);
  return (
    <a href={props.albumInput.href}>
      <div>
        <AlbumImages imagesInput={props.albumInput.images} />
        <AlbumName albumNamesInput={props.albumInput.name} />
        <AlbumArtists artistsInput={props.albumInput.artists} />
      </div>
    </a>
  );
};