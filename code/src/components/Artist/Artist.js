import React from 'react';
import './Artist.css';

const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return ' & ';
  } else if (index < length - 2) {
    return ', ';
  }
};

export const Artist = (props) => {
  return (
    <div className="artist-div">
      {props.artists.map((artist, index) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={artist.external_urls.spotify}
          key={artist.id}
          className="artist-container">
          {artist.name}
          {generateDelimiter(index, props.artists.length)}
        </a>
      ))}
    </div>
  )
}

/*
    <p>
      {props.artists.map((artist) => (
        <span>{artist.name}</span>
      ))}
    </p>
*/