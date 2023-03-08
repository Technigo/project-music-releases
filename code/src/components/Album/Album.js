import React from 'react';
import styles from './Album.component.css';

export const Album = ({ album }) => {
  console.log(album);
  return (
    <div>
      <h3 className={styles.albumTitle}>{album}</h3>
    </div>
  )
}
/*
<div>
{data.albums.items.map((album) => (
  <div key={album.id}>
    <h3>{album.name}</h3>
  </div>
))}
</div>

<div>
      {data.albums.items.map((singleAlbumItem) => {
        return (<h1>{singleAlbumItem.name}</h1>);
      })}
    </div>)

{data.albums.items.map((album) => (
  <div key={album.id}>
    <h3>{album.name}</h3> */