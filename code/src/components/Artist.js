import React from 'react';
import '../artist.css'

// const Artist = Defines a functional component called "Artist" that takes in a "props"
// object as a parameter.

// {index < props.artists.length - 1 && ...} is a conditional statement that checks whether
// the current artist being mapped is not the last artist in the "artists" array. If it's not
// the last artist, then a comma (',') is displayed after the artist's name. If it is
// the second to last artist, ('&') is displayed instead of the comma. The ...
// syntax is used to include a <span> element that contains either the comma or the ampersand,
// depending on the current artist's index in the array.

const Artist = (props) => {
  return (
    <div>
      {props.artists.map((artist, index) => (
        <a
          key={artist.id}
          className="artist-container"
          href={artist.external_urls.spotify}
          rel="noopener noreferrer"
          target="_blank">
          {artist.name}
          {index < props.artists.length - 1 && <span>{index === props.artists.length - 2 ? ' & ' : ', '}</span>}
        </a>
      ))}
    </div>
  );
}

export default Artist;