import React from 'react';
import styles from './album.css';

export const Album = ({ album }) => {
  console.log(album);
  return (
    <div>
      <h3 className={styles.albumTitle}>{album}</h3>
    </div>
  )
}