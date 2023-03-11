import React from 'react';
import CoverImage from './components/CoverImage';
import { ArtistName } from './ArtistName/ArtistName';
import { AlbumName } from './AlbumName/AlbumName';

export const Album = (props) => {
  console.log('logging props:', props);
  return (
    <section>
      {props.mapdata.albums.items.map((singleItem) => {
        return (
          <div className="album-wrapper" key={singleItem.id}>
            <CoverImage itemCoverImage={singleItem} />
            <AlbumName singleAlbumItem={singleItem} />
            <ArtistName singleArtistItem={singleItem} />
          </div>
        );
      })}
    </section>
  );
};
