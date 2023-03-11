import React from 'react';
import './AlbumArtist.css';

// import styles from './Album.module.css';
// I fixed it by changing the name from "HeaderStyling.css" to "HeaderStyling.module.css everywhere

// - `Artist` component which is rendered using `.map()` using each item in the
// `artists` array, inside the `Album` component to show the artist name and a link.

export const AlbumArtist = (props) => {
  // console.log(props)
  // const content = props.item.artists;
  return (
    <div className="album-artist-container">
      {props.artistsArray.map((artist, index) => {
        return (
          <a
            className="artist-name-link"
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noreferrer">
            <span className="artist-name">
              {artist.name}
              {props.artistsArray.length - 1 > index ? ', ' : ''}
            </span>
          </a>
        );
      })}
    </div>
  );
};
