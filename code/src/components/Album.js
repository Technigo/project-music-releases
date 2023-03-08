import React from 'react';
import { AlbumArtists } from './AlbumArtists';
import { AlbumImages } from './AlbumImages';
import { AlbumName } from './AlbumName';

export const Album = (props) => {
  console.log(props);
  return (
    <div className="album-container">
      <a
        href={props.albumInput.external_urls.spotify}
        target="_blank"
        rel="noreferrer">
        <AlbumImages imagesInput={props.albumInput.images} />
        <AlbumName albumNamesInput={props.albumInput.name} />
        <AlbumArtists artistsInput={props.albumInput.artists} />
      </a>
    </div>
  );
};