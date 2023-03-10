import React from 'react';
import Artists from 'Components/Artists';
import styles from './AlbumStyling.module.css';

const AlbumComponent = (props) => {
  const imgSrc = props.album.images[0];

  return (
    <div className="album-container">
      <div className={styles.imgContainer}>
        <img className={styles.coverImg} src={imgSrc.url} alt="coverImage" />
        <div className="icon-container">
          <div className="icons">
            <img className="heart icon" src="./icons/heart.svg" alt="heart-icon" />
            <a href={props.album.external_urls.spotify} target="_blank" rel="noreferrer"><img className="play icon" src="./icons/play.svg" alt="play-icon" /></a>
            <img className="dots icon" src="./icons/dots.svg" alt="three dots-icon" />
          </div>
        </div>
      </div>
      <a
        href={props.album.external_urls.spotify}
        target="_blank"
        rel="noreferrer">
        <h1 className={styles.albumName}>{props.album.name}</h1>
      </a>
      <Artists artists={props.album.artists} />
    </div>
  )
}

export default AlbumComponent;