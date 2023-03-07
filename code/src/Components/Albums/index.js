import React from 'react';
import styles from './AlbumStyling.css';

const AlbumComponents = (props) => {
  const imgSrc = props.album.images[0];

  return (
    <div className="album-container">
      <div className={styles.imgContainer}>
        <img className={styles.coverImg} src={imgSrc.url} alt="coverImage" /> 
      </div>
    </div>
  )
}

export default AlbumComponents;