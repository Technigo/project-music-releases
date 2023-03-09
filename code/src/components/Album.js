import React from 'react';
import CoverImage from './components/CoverImage/CoverImage';
import ArtistName from './components/ArtistName/ArtistName';
import AlbumName from './components/AlbumName/AlbumName';

const Album = (props) => {
  console.log('logging props:', props);
  return (
    <section>
      {props.mapdata.albums.items.map((item) => {
        return (
          <div key={item.id}>
            <CoverImage />
            <ArtistName />
            <AlbumName />
          </div>
        );
      })}
    </section>
  );
};

export default Album;