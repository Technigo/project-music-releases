import React from 'react';
import styles from './ArtistStyling.module.css';

const Artists = (props) => {
  return (
    <div className={styles.artistContainer}>
      {props.artists.map((artist, index) => (
        <a
          href={artist.external_urls.spotify}
          key={artist.id}
          target="_blank"
          rel="noreferrer">
          <p className={styles.artistName}>
            {artist.name}
            {props.artists.length - 1 > index ? ', ' : ''}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Artists;