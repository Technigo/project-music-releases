import React from 'react';

<<<<<<< HEAD
//Here we define the html in which the information about the artist (name & url) shall be displayed
export const AlbumArtist = (props) => {
  return (
    <a
<<<<<<< HEAD
      className="album-artist"
=======
      className="artist-name"
=======
const AlbumArtist = (props) => {
  return (
    <a
      className="album-artist"
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e
>>>>>>> 3377d73c88154029d81399ec41ea746d0b3729ab
      href={props.artistUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.artistName}
    </a>
  );
};
<<<<<<< HEAD
=======

export default AlbumArtist;
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e
