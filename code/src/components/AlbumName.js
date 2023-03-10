import React from 'react';

// import styles from './Album.module.css';
// I fixed it by changing the name from "HeaderStyling.css" to "HeaderStyling.module.css everywhere

export const AlbumName = (props) => {
  return (
    <a className="link-album-name" href={props.urlAlbumName}>
      <h1 className="album-title">{props.albumName}</h1>
    </a>
  )
};