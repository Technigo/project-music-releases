import React from 'react';

//Here we define the html in which the information about the artist (name & url) shall be displayed
export const AlbumArtist = (props) => {
  return (
    <a
      className="artist-name"
      href={props.artistUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.artistName}
    </a>
  );
};
