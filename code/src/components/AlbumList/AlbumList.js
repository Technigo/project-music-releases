import React from 'react';
import { Album } from '../Album/Album';

export const AlbumList = (props) => {
  console.log(props)
  return (
    <section className="AlbumList">
      {props.data.albums.items.map((singleAlbum) => (
        <Album key={singleAlbum.id} albumDetails={singleAlbum} />
      ))}
    </section>
  );
};

/* Single object of array is props.albumDetails. */
