import React from 'react';
import { CoverImage } from './CoverImage/CoverImage.js';
import { ArtistName } from './ArtistName/ArtistName.js';
import { AlbumName } from './AlbumName/AlbumName.js';

export const Album = (props) => {
  console.log('logging props:', props);
  return (
    <section className="album-wrapper">
      {props.mapdata.albums.items.map((singleItem) => {
        console.log('log singleItem:', singleItem);
        return (
          <div className="album" key={singleItem.id}>
            <CoverImage singleCoverItem={singleItem} />
            <AlbumName singleAlbumItem={singleItem} />
            <ArtistName singleArtistItem={singleItem} />
          </div>
        );
      })}
    </section>
  );
};
