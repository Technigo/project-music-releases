import React from 'react';
import CoverImage from './CoverImage/CoverImage';
import ArtistName from './ArtistName/ArtistName';
import AlbumName from './AlbumName/AlbumName';

const Album = (props) => {
  console.log('logging props:', props);
  return (
    <section>
      {props.mapdata.albums.items.map((singleItem) => {
        return (
          <div key={singleItem.id}>
            <CoverImage itemCoverImage={singleItem} />
            <ArtistName />
            <AlbumName />
          </div>
        );
      })}
    </section>
  );
};

export default Album;