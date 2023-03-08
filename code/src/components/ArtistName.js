import React from 'react';
import './ArtistName.css';

// import styles from './Album.module.css';
// I fixed it by changing the name from "HeaderStyling.css" to "HeaderStyling.module.css everywhere

// - `Artist` component which is rendered using `.map()` using each item in the
// `artists` array, inside the `Album` component to show the artist name and a link.

export const ArtistName = (props) => {
  return (
    <div>
      {props.items.artists.map((artist, index) => {
        return (
          <a className='artist-name'
            key={artist.id}
            href={artist.external_urls.spotify}>
            <span>{content.length > 1 && index === content.length -1?' & ' : ''}</span>
            {artist.name}
            <span>{content.length -2 > index? ', ' : ''}</span>
          </a>
        )
      })
      }
    </div>
  )
};

// const content = props.item.artists;

// <h2 className={artist-name}>{props.artistDetails.albums.items[0].artists[0].name}</h2>
// <h1 className={albumTitle}>{props.artistDetails.albums.items.name}</h1>