import React from 'react';

import { ArtistName } from './ArtistName';
import { AlbumCover } from './AlbumCover';
import { AlbumTitle } from './AlbumTitle';

export const Album = (props) => {
  return (
    /* gathering cover, artist name and album title in the same component to later be mapped */
    <div className="master-wrapper">
      <AlbumCover
        cover={props.albumCategory.images[0].url}
        link={props.albumCategory.external_urls.spotify} />

      <div className="title-wrapper">
        <AlbumTitle
          name={props.albumCategory.name}
          link={props.albumCategory.external_urls.spotify} />

        <ArtistName
          artistArray={props.albumCategory.artists} />
      </div>

    </div>

  );
};
