import React from 'react';
import './ArtistName.css';

export const ArtistName = (props) => {
  const { artists } = props.singleArtistItem;
  let artistNames = '';

  if (artists.length === 1) {
    artistNames = artists[0].name;
  } else if (artists.length === 2) {
    artistNames = `${artists[0].name} & ${artists[1].name}`;
  } else if (artists.length > 2) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < artists.length; i++) {
      if (i < artists.length - 2) {
        artistNames += `${artists[i].name}, `;
      } else if (i === artists.length - 2) {
        artistNames += `${artists[i].name} & `;
      } else {
        artistNames += artists[i].name;
      }
    }
  }

  return (
    <div className="ArtistName">
      <a
        href={props.singleArtistItem.external_urls.spotify}
        target="_blank"
        rel="noreferrer noopener">
        <h3>{artistNames}</h3>
      </a>
    </div>
  );
};
