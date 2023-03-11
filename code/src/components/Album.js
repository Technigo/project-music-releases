import React from 'react';
import { AlbumArtists } from './AlbumArtists';
import { AlbumImages } from './AlbumImages';
import { AlbumName } from './AlbumName';
import { AlbumTracks } from './AlbumTracks';

export const Album = (props) => {
  return (
    <div
      className="album-container"
      onClick={() => window.open(props.albumInput.external_urls.spotify, '_blank')}
      onKeyDown={() => window.open(props.albumInput.external_urls.spotify, '_blank')}
      role="link"
      tabIndex={0}>
      <AlbumImages imagesInput={props.albumInput.images} />
      <AlbumName albumNamesInput={props.albumInput.name} />
      <AlbumArtists artistsInput={props.albumInput.artists} />
      <AlbumTracks tracksInput={props.albumInput.total_tracks} />
    </div>
  );
};