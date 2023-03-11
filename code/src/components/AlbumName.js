import React from 'react';
import './AlbumName.css'

// import styles from './Album.module.css';
// I fixed it by changing the name from "HeaderStyling.css" to "HeaderStyling.module.css everywhere

export const AlbumName = (props) => {
  return (
    <a
      className="album-name-link"
      href={props.urlAlbumName}
      target="_blank"
      rel="noreferrer">
      <h2 className="album-name">{props.albumName}</h2>
    </a>
  )
};